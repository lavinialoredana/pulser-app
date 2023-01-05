import { cleanup, render, screen } from "@testing-library/react";
import FeedbackReaction from "./index.jsx";

describe("FeedbackReaction Component", ()=>{
    afterEach(()=>{
        cleanup();
    });

    it("should contain h3 title", ()=>{
        render(<FeedbackReaction/>);

        const titleElement = screen.getByTestId("feedBackReaction-title");

        expect(titleElement).toBeInTheDocument();
    })

    it("should render the title", ()=>{
        render(<FeedbackReaction />);

        const titleText = screen.getByText("Awesome");

        expect(titleText).toBeInTheDocument();
    })

  it('displays an awesome face', () => {
      render(<FeedbackReaction />);
    const awesomeImage = screen.getByAltText("awesome_face");
    expect(awesomeImage.src).toContain("awesome_face");
  })

})