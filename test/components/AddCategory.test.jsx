/* globals jest, describe, expect, test */

import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("run AddCategory.jsx test", () => {
  const title = "Dragon Ball";

  test("should update the input value when the user types in the text box", () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: title } });

    expect(input.value).toBe(title);
  });

  test("should call onAddCategory and clear the input after form submission", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: title } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(title);
  });

  test("should not call onAddCategory if the input value is empty on form submission", () => {
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onAddCategory).not.toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(0);
  });
});
