/* globals describe, expect, test */

import { getGifs } from "../../src/helpers/getGifs";

describe("run getGifs.js test", () => {
  test("should fetch a list of GIFs with valid properties when searching for 'Dragon Ball'", async () => {
    const gifs = await getGifs("Dragon Ball");

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
