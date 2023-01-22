import { cleanup, render, screen } from "@testing-library/react";
import PulserMessages from "./index.jsx";
import { mockedDataArray } from "../../utils/mockedData";

describe("PulserMessages component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(
      <PulserMessages feedData={mockedDataArray} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain Awesome title and awesome_face image", () => {
    render(<PulserMessages feedData={mockedDataArray} />);

    const titleText = screen.getByText("Awesome");
    const awesomeImage = screen.getByAltText("awesome_face");

    expect(titleText).toBeInTheDocument();
    expect(awesomeImage.src).toContain("awesome_face.png");
  });

  it("should match data length with feed length", () => {
    render(<PulserMessages feedData={mockedDataArray} />);

    const messageElement = screen.getAllByTestId("reaction-message");

    expect(messageElement.length).toEqual(mockedDataArray.length);
  });
});
