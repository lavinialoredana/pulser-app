import { cleanup, render, screen } from "@testing-library/react";
import FeedbackMessage from ".";
import userEvent from "@testing-library/user-event";

describe("FeedbackMessage component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", ()=>{
      const {asFragment} = render(<FeedbackMessage/>);

      expect(asFragment()).toMatchSnapshot();
  })

  it("should contain textarea field", () => {
    render(<FeedbackMessage />);

    const inputFieldElement = screen.getByTestId("textarea-field");

    expect(inputFieldElement).toBeInTheDocument();
  });

  it("should contain placeholder", () => {
    render(<FeedbackMessage />);

    const placeholderText = screen.getByPlaceholderText(
      "Write here any additional feedback"
    );

    expect(placeholderText).toBeInTheDocument();
  });

  it("should get value from textarea", () => {
    const message = "Thank you!";

    render(<FeedbackMessage userFeedback={message} />);

    const userInput = screen.getByTestId("textarea-field");

    expect(userInput.value).toBe(message);
  });

  it("should fire onChange correctly", async () => {
    const user = userEvent.setup();
    const message = "Thank you!";
    const onChangeMock = jest.fn();

    render(<FeedbackMessage onUserFeedbackChange={onChangeMock} />);

    const userInput = screen.getByTestId("textarea-field");

    await user.type(userInput, message);
    expect(onChangeMock).toHaveBeenCalledTimes(message.length);
  });
});
