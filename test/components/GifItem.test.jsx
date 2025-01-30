/* globals describe, expect, test */

import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("run GifItem.jsx test", () => {
  const url = "https://es.dragon-ball-official.com/";
  const title = "Dragon Ball";

  test("must match with the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("show images with the URL and ALT correctly", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("must display the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
