import { cleanup, render, screen } from "@testing-library/react";
import Reactions from "./index.jsx";
import { reactionsArray } from "../../utils/reactionsUtils";

describe("Reactions Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<Reactions reactions={reactionsArray} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain Awesome title and awesome_face image", () => {
    render(<Reactions reactions={reactionsArray} />);

    const titleText = screen.getByText("Awesome");
    const awesomeImage = screen.getByAltText("awesome_face");

    expect(titleText).toBeInTheDocument();
    expect(awesomeImage.src).toContain("awesome_face.png");
  });

  it("should render Happy title and happy_face image", () => {
    render(<Reactions reactions={reactionsArray} />);

    const titleText = screen.getByText("Happy");
    const happyImage = screen.getByAltText("happy_face");

    expect(titleText).toBeInTheDocument();
    expect(happyImage.src).toContain("happy_face.png");
  });

  it("should render Sad title and sad_face image", () => {
    render(<Reactions reactions={reactionsArray} />);

    const titleText = screen.getByText("Sad");
    const awesomeImage = screen.getByAltText("sad_face");

    expect(titleText).toBeInTheDocument();
    expect(awesomeImage.src).toContain("sad_face.png");
  });

  it("should render Angry title and angry_face image", () => {
    render(<Reactions reactions={reactionsArray} />);

    const titleText = screen.getByText("Angry");
    const awesomeImage = screen.getByAltText("angry_face");

    expect(titleText).toBeInTheDocument();
    expect(awesomeImage.src).toContain("angry_face.png");
  });
});
