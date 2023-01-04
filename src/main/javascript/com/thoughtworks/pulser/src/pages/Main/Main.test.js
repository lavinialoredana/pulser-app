import { cleanup, render, screen } from "@testing-library/react";
import Main from "./index.jsx"


describe("Main Page", () => {
  afterEach(() => {
    cleanup();
  });

  it("should contain header", () => {
    render(<Main />);

    const mainHeaderElement = screen.getByTestId("main-header");

    expect(mainHeaderElement).toBeInTheDocument();
  });

  it("should render the", ()=>{
    render(<Main/>);

    const headerText = screen.getByText('How are you feeling today?');
    
    expect(headerText).toBeInTheDocument();
  })
});
