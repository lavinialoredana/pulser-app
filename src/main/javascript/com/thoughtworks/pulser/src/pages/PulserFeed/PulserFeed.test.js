import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PulserFeed from "./index.jsx";

describe("PulserFeed Page structure", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<PulserFeed />, { wrapper: BrowserRouter });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the title", () => {
    render(<PulserFeed />, { wrapper: BrowserRouter });

    const titleElement = screen.getByTestId("pulser-feed");

    expect(titleElement).toBeInTheDocument();
  });
});
