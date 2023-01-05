import { cleanup, render, screen } from "@testing-library/react";
import Reactions from "./index.jsx";

describe("Reactions Component", () => {
  afterEach(() => {
    cleanup();
  });

  // it("should match snapshot", () => {
  //   const { asFragment } = render(<Reactions />);

  //   expect(asFragment()).toMatchSnapshot();
  // });

  it("should contain awesome face image", () => {
    render(<Reactions />);

    const awesomeImage = screen.getByAltText("awesome_face");
    expect(awesomeImage.src).toContain("awesome_face.png");
  });

  it("should render Awesome title", () => {
    render(<Reactions />);

    const titleText = screen.getByText("Awesome");

    expect(titleText).toBeInTheDocument();
  });

  it("should render Happy title", () => {
    render(<Reactions />);

    const titleText = screen.getByText("Happy");

    expect(titleText).toBeInTheDocument();
  });

  it("should contain happy face image", () => {
    render(<Reactions />);

    const awesomeImage = screen.getByAltText("happy_face");
    expect(awesomeImage.src).toContain("happy_face.png");
  });

  it("should render Sad title", () => {
    render(<Reactions />);

    const titleText = screen.getByText("Sad");

    expect(titleText).toBeInTheDocument();
  });

  it("should contain sad face image", () => {
    render(<Reactions />);

    const awesomeImage = screen.getByAltText("sad_face");
    expect(awesomeImage.src).toContain("sad_face.png");
  });

  it("should render Angry title", () => {
    render(<Reactions />);

    const titleText = screen.getByText("Angry");

    expect(titleText).toBeInTheDocument();
  });

  it("should contain angry face image", () => {
    render(<Reactions />);

    const awesomeImage = screen.getByAltText("angry_face");
    expect(awesomeImage.src).toContain("angry_face.png");
  });
});
