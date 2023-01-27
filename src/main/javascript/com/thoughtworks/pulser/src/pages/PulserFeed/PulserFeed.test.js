import { cleanup, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PulserFeed from "./index.jsx";
import { mockedDataArray } from "../../utils/mockedData.js";

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

  it("should contain button", () => {
  
    render(<PulserFeed />, { wrapper: BrowserRouter });

    const buttonComponent = screen.getByTestId("button");
    
    expect(buttonComponent).toBeInTheDocument();
  });
});

describe("PulserFeed user flow", () => {
  afterEach(() => {
    cleanup();
  });

  it("should receive data", async () => {
    const mockedFetch = jest.fn(() => {
      return Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockedDataArray),
      });
    });

    jest.spyOn(global, "fetch").mockImplementation(mockedFetch);

    render(<PulserFeed />, { wrapper: BrowserRouter });

    expect(mockedFetch).toHaveBeenCalledTimes(1);
    expect(mockedFetch).toHaveBeenCalledWith(
      "http://localhost:8080/pulserfeed/messages"
    );
  });
});
