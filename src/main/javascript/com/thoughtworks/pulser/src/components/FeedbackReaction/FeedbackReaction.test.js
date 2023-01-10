import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeedbackReaction from "./index.jsx";

describe("FeedbackReaction Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const onReactionPressMock = jest.fn();
    const { asFragment } = render(
      <FeedbackReaction
        reactionName="Awesome"
        reactionImage="awesome_face"
        reactionAlt="awesome_face"
        isReactionPressed={onReactionPressMock}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain h3 title", () => {
        const onReactionPressMock = jest.fn();

    render(<FeedbackReaction isReactionPressed={onReactionPressMock} />);

    const titleElement = screen.getByTestId("feedBackReaction-title");

    expect(titleElement).toBeInTheDocument();
  });

  it("should render the title", () => {
    const onReactionPressMock = jest.fn();

    render(
      <FeedbackReaction
        reactionName="Awesome"
        isReactionPressed={onReactionPressMock}
      />
    );

    const titleText = screen.getByText("Awesome");

    expect(titleText).toBeInTheDocument();
  });

  it("displays an awesome face", () => {
    const onReactionPressMock = jest.fn();
    render(
      <FeedbackReaction
        reactionImage="awesome_face"
        reactionAlt="awesome_face"
        isReactionPressed={onReactionPressMock}
      />
    );
    const awesomeImage = screen.getByAltText("awesome_face");

    expect(awesomeImage.src).toContain("awesome_face");
  });

  it("should fire onClick correctly", async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    const onReactionPressMock = jest.fn();
    render(
      <FeedbackReaction
        reactionImage="awesome_face"
        reactionAlt="awesome_face"
        onReactionClick={onClickMock}
        isReactionPressed={onReactionPressMock}
      />
    );

    const awesomeImage = screen.getByAltText("awesome_face");

    await user.click(awesomeImage);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should fire isReactionPressed correctly", async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    const onReactionPressMock = jest.fn();
    const reactionKey = "awesome_face";
    render(
      <FeedbackReaction
        reactionImage="awesome_face"
        reactionAlt="awesome_face"
        reactionKey="awesome_face"
        onReactionClick={onClickMock}
        isReactionPressed={onReactionPressMock}
      />
    );

    const awesomeImage = screen.getByAltText("awesome_face");

    await user.click(awesomeImage);
    expect(onReactionPressMock).toHaveBeenCalledTimes(1);
    expect(onReactionPressMock).toHaveBeenCalledWith(reactionKey);
  });
});
