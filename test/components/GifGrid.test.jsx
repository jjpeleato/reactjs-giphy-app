/* globals jest, describe, expect, test */

import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("run GifGrid.jsx test", () => {
  const title = "Dragon Ball";

  test("should display the category title and the loading indicator initially", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={title} />);
    expect(screen.getByText(title));
    expect(screen.getByText("Cargando..."));
  });

  test("should display the correct number of GIF images when useFetchGifs returns data", () => {
    const gifs = [
      {
        id: "1",
        title: "Goku",
        url: "https://dragonball-api.com/transformaciones/goku_ultra.webp",
      },
      {
        id: "2",
        title: "Vegeta",
        url: "https://dragonball-api.com/transformaciones/vegeta%20mega%20instinto.webp",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={title} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
