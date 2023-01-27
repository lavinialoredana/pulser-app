import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, RouterProvider, Router } from "react-router-dom";
import Main from "./index.jsx";
import { routesConfig } from "../../routes/AppRouter.js";
import * as router from "react-router";
import { createMemoryHistory } from "@remix-run/router";

describe("Main Page structure", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<Main />, { wrapper: BrowserRouter });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render essential components", () => {
    render(<Main />, { wrapper: BrowserRouter });

    const mainHeaderElement = screen.getByTestId("main-header");
    const feedbackMessageComponent = screen.getByTestId("textarea-field");
    const reactionsComponent = screen.getByTestId("reactions");
    const feedbackReactionComponent =
      screen.getAllByTestId("feedback-reaction");
    const buttonComponent = screen.getByTestId("button");

    expect(mainHeaderElement).toBeInTheDocument();
    expect(feedbackMessageComponent).toBeInTheDocument();
    expect(reactionsComponent).toBeInTheDocument();
    expect(feedbackReactionComponent.length).toBe(4);
    expect(buttonComponent).toBeInTheDocument();
  });

  it("should render the title", () => {
    render(<Main />, { wrapper: BrowserRouter });

    const headerText = screen.getByText("How are you feeling today?");

    expect(headerText).toBeInTheDocument();
  });
});

describe("Main Page full user flow", () => {
  afterEach(() => {
    jest.restoreAllMocks();
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<Main />, { wrapper: BrowserRouter });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should send", async () => {
    const user = userEvent.setup();
    const mockedFetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ success: "OK" }),
      });
    });

    render(<Main />, { wrapper: BrowserRouter });

    const faceKey = "AWESOME";
    const awesomeImage = screen.getByAltText("awesome_face");
    await user.click(awesomeImage);

    const message = "Thank you!";
    const textArea = screen.getByTestId("textarea-field");
    await user.type(textArea, message);

    jest.spyOn(global, "fetch").mockImplementation(mockedFetch);

    const submitButton = screen.getByTestId("button");
    await user.click(submitButton);

    expect(mockedFetch).toHaveBeenCalledTimes(1);
    expect(mockedFetch).toHaveBeenCalledWith(
      "https://reqbin.com/echo/post/json",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({
          face: faceKey,
          body: message,
        }),
      }
    );
  });
});

describe("Router error page testing", () => {
  afterEach(() => {
    cleanup();
  });

  it("should verify page content for expected route after navigating", async () => {
    const user = userEvent.setup();
    const mockedFetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ success: "OK" }),
      });
    });

    const landingRoute = "/";
    const pulserFeedRoute = "/pulserfeed/messages";

    const history = createMemoryHistory(routesConfig, {
      initialEntries: [landingRoute],
    });

    render(
      <Router location={history} navigator={history}>
        <Main />
      </Router>
    );

    const awesomeImage = screen.getByAltText("awesome_face");
    await user.click(awesomeImage);

    const message = "Thank you!";
    const textArea = screen.getByTestId("textarea-field");
    await user.type(textArea, message);

    jest.spyOn(global, "fetch").mockImplementation(mockedFetch);

    expect(history.location.pathname).toBe(landingRoute);

    const submitButton = screen.getByTestId("button");
    await user.click(submitButton);

    expect(history.location.pathname).toBe(pulserFeedRoute);
  });

  test("landing on the main page", () => {
    const landingRoute = "/";
    const badRoute = "/some/bad/route";

    const history = createMemoryHistory(routesConfig, {
      initialEntries: [landingRoute],
    });

    render(
      <Router location={history} navigator={history}>
        <Main />
      </Router>
    );

    expect(history.location.pathname).not.toBe(badRoute);
    expect(history.location.pathname).toBe(landingRoute);
  });

  test("landing on the error page", () => {
    const badRoute = "/some/bad/route";

    const customMemoryRouter = router.createMemoryRouter(routesConfig, {
      initialEntries: [badRoute],
    });

    render(<RouterProvider router={customMemoryRouter} />);

    const errorPageTitleElement = screen.getByTestId("error-title");

    expect(customMemoryRouter.state.location.pathname).toBe(badRoute);
    expect(errorPageTitleElement).toBeInTheDocument();
  });
});

const navigateMock = jest.fn();

describe("Router happy path testing", () => {
  beforeEach(() => {
    jest.spyOn(router, "useNavigate").mockImplementation(() => navigateMock);
  });
  afterEach(() => {
    cleanup();
  });

  it("should call navigate on submit button", async () => {
    const user = userEvent.setup();
    const mockedFetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ success: "OK" }),
      });
    });

    render(<Main />, { wrapper: BrowserRouter });

    const awesomeImage = screen.getByAltText("awesome_face");
    await user.click(awesomeImage);

    const message = "Thank you!";
    const textArea = screen.getByTestId("textarea-field");
    await user.type(textArea, message);

    jest.spyOn(global, "fetch").mockImplementation(mockedFetch);

    const mockedPath = "/pulserfeed/messages";

    const submitButton = screen.getByTestId("button");
    await user.click(submitButton);

    expect(navigateMock).toHaveBeenCalledWith(mockedPath);
  });
});
