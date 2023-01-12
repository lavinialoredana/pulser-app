import { cleanup, render, screen } from "@testing-library/react";
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
    const feedbackReactionComponent = screen.getAllByTestId("feedback-reaction");
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
