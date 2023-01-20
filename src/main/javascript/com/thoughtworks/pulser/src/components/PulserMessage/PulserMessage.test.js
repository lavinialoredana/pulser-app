import { cleanup, render, screen } from "@testing-library/react";
import PulserMessage from "./index.jsx";

describe("PulserMessage component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(
      <PulserMessage
        reactionTitle="Awesome"
        reactionFace="awesome_face"
        reactionFaceAlt="awesome_face"
        feedbackMessage="having a great time!"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain a reaction title", () => {
    render(
      <PulserMessage
        reactionTitle="Awesome"
        reactionFace="awesome_face"
        reactionFaceAlt="awesome_face"
        feedbackMessage="having a great time!"
      />
    );

    const titleElement = screen.getByTestId("reaction-title");
    const titleText = screen.getByText("Awesome");

    expect(titleElement).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
  });

  it("should contain a reaction image", () => {
    render(
      <PulserMessage
        reactionTitle="Awesome"
        reactionFace="awesome_face"
        reactionFaceAlt="awesome_face"
        feedbackMessage="having a great time!"
      />
    );

    const imageElement = screen.getByAltText("awesome_face");

    expect(imageElement.src).toContain("awesome_face");
  });

  it("should contain a message", () => {
    render(
      <PulserMessage
        reactionTitle="Awesome"
        reactionFace="awesome_face"
        reactionFaceAlt="awesome_face"
        feedbackMessage="having a great time!"
      />
    );

    const messageElement = screen.getByTestId("reaction-message");
    const messageText = screen.getByText("having a great time!");

    expect(messageElement).toBeInTheDocument();
    expect(messageText).toBeInTheDocument();
  });
});
