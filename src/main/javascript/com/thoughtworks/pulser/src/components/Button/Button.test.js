import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./index.jsx";

describe("Button Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", ()=>{
    const {asFragment} = render(
        <Button/>
    )

    expect(asFragment()).toMatchSnapshot();
  })

it("should contain button", () => {
    render(<Button />);

    const buttonElement = screen.getByTestId("button");

    expect(buttonElement).toBeInTheDocument();
  });

  it("should fire click correctly", async ()=>{
    const user = userEvent.setup();
    const onClickMock =jest.fn();

    render(<Button onClickButton={onClickMock}/>);

    const button = screen.getByTestId("button");

    await user.click(button);
    expect(onClickMock).toHaveBeenCalled();

  })
});
