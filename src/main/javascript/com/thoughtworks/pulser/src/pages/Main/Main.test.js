import { render, screen } from "@testing-library/react";
import Main from ".";

test("renders Header", () => {
  render(<Main />);
 
 const headingElement = screen.getByRole("header");
  expect(headingElement).toHaveTextContent("How are you feeling today?");
});
