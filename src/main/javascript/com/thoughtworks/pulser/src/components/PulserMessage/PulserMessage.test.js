import { cleanup, render, screen } from "@testing-library/react";
import PulserMessage from "./index.jsx";

describe("PulserMessage component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<PulserMessage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain a reaction title", ()=>{
    render(<PulserMessage/>);

    const titleElement = screen.getByTestId("reaction-title");
    const titleText = screen.getByText("Happy")

    expect(titleElement).toBeInTheDocument();
    expect(titleText).toBeInTheDocument()
  })

   it("should contain a reaction image", () => {
     render(<PulserMessage />);

     const imageElement = screen.getByAltText("happy_face");

     expect(imageElement.src).toContain("happy_face");
   });

    it("should contain a message", () => {
      render(<PulserMessage />);

      const messageElement = screen.getByTestId("reaction-message");
      const messageText = screen.getByText("First message");

      expect(messageElement).toBeInTheDocument();
      expect(messageText).toBeInTheDocument();
    });
});
