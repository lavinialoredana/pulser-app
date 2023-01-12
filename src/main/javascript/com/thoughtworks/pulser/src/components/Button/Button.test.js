import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./index.jsx";

describe("Button Component", () => {
  afterEach(() => {
    cleanup();
  });

  it("should match snapshot", () => {
    const isDisabledMock = jest.fn(() => true);
    const { asFragment } = render(<Button isDisabled={isDisabledMock} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain button", () => {
    const isDisabledMock = jest.fn(() => true);
    render(<Button isDisabled={isDisabledMock} />);

    const buttonElement = screen.getByTestId("button");

    expect(buttonElement).toBeInTheDocument();
  });

  it("should render button name", () => {
    const isDisabledMock = jest.fn(() => true);
    const buttonName = "Submit";
    render(<Button buttonName={buttonName} isDisabled={isDisabledMock} />);

    const buttonElement = screen.getByTestId("button");

    expect(buttonElement.name).toBe(buttonName);
  });

  it("should fire click correctly", async () => {
    const isDisabledMock = jest.fn(() => false);
    const user = userEvent.setup();
    const onClickMock = jest.fn();

    render(<Button onClickButton={onClickMock} isDisabled={isDisabledMock} />);

    const button = screen.getByTestId("button");

    await user.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should display disabled button on render", () => {
    const isDisabledMock = jest.fn(() => true);
    render(<Button isDisabled={isDisabledMock} />);

    const button = screen.getByTestId("button");

    expect(button.disabled).toBe(true);
  });

  it("should not call click event", async () => {
    const user = userEvent.setup();
    const onClickMock = jest.fn();
    const isDisabledMock = jest.fn(() => true);
    render(<Button onClickButton={onClickMock} isDisabled={isDisabledMock} />);

    const button = screen.getByTestId("button");

    await user.click(button);
    expect(onClickMock).not.toHaveBeenCalled();
  });
});
