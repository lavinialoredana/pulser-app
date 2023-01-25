import { cleanup, render, screen } from "@testing-library/react";
import Reactions from "./index.jsx";
import { reactionsArray } from "../../utils/reactionsUtils";

describe("Reactions Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const onReactionPressMock = jest.fn();
    const { asFragment } = render(
      <Reactions
        reactions={reactionsArray}
        onReactionPress={onReactionPressMock}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain Awesome title and awesome_face image", () => {
    const onReactionPressMock = jest.fn();
    render(
      <Reactions
        reactions={reactionsArray}
        onReactionPress={onReactionPressMock}
      />
    );

    const titleText = screen.getByText("Awesome");
    const awesomeImage = screen.getByAltText("awesome_face");

    expect(titleText).toBeInTheDocument();
    expect(awesomeImage.src).toContain("awesome_face.png");
  });

  it("should render Happy title and happy_face image", () => {
    const onReactionPressMock = jest.fn();

    render(
      <Reactions
        reactions={reactionsArray}
        onReactionPress={onReactionPressMock}
      />
    );

    const titleText = screen.getByText("Happy");
    const happyImage = screen.getByAltText("happy_face");

    expect(titleText).toBeInTheDocument();
    expect(happyImage.src).toContain("happy_face.png");
  });

  it("should render Sad title and sad_face image", () => {
    const onReactionPressMock = jest.fn();

    render(
      <Reactions
        reactions={reactionsArray}
        onReactionPress={onReactionPressMock}
      />
    );

    const titleText = screen.getByText("Sad");
    const awesomeImage = screen.getByAltText("sad_face");

    expect(titleText).toBeInTheDocument();
    expect(awesomeImage.src).toContain("sad_face.png");
  });

  it("should render Awful title and awful_face image", () => {
    const onReactionPressMock = jest.fn();
    render(
      <Reactions
        reactions={reactionsArray}
        onReactionPress={onReactionPressMock}
      />
    );

    const titleText = screen.getByText("Awful");
    const awesomeImage = screen.getByAltText("awful_face");

    expect(titleText).toBeInTheDocument();
    expect(awesomeImage.src).toContain("awful_face.png");
  });
});
