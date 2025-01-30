export const getGifs = async (category) => {
  const uri = import.meta.env.VITE_API_URL;
  const key = import.meta.env.VITE_API_KEY;
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
