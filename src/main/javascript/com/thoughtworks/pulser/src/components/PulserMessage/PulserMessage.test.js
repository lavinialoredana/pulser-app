import { cleanup, render } from "@testing-library/react";
import PulserMessage from "./index.jsx";

describe("PulserMessage component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<PulserMessage />);

    expect(asFragment()).toMatchSnapshot();
  });
});
