import { uri, key } from "../constants";

export const getGifs = async (category) => {
  const limit = 10;
  const url = `${uri}?api_key=${key}&q=${category}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((item) => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url,
  }));

  return gifs;
};
