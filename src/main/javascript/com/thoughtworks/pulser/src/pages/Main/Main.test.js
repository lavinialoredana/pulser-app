import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Main from "./index.jsx";

describe("Main Page structure", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<Main />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render essential components", () => {
    render(<Main />);

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
    render(<Main />);

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
    const { asFragment } = render(<Main />);

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

    render(<Main />);

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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          face: faceKey,
          body: message,
        }),
      }
    );
  });
});

describe("Router testing", ()=>{
  
})
