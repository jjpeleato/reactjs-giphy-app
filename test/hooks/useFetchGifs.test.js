/* globals describe, expect, test */

import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("run useFetchGifs.js test", () => {
  const title = "Dragon Ball";

  test("should return an empty images array and isLoading as true initially", () => {
    const { result } = renderHook(() => useFetchGifs(title));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return a populated images array and isLoading as false after fetching data", async () => {
    const { result } = renderHook(() => useFetchGifs(title));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
