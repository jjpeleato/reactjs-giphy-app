import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      const items = await getGifs(category);
      setImages(items);
      setIsLoading(false);
    };

    getImages();
  }, [category]); // Se ejecutará cada vez que cambie `category`

  return {
    images,
    isLoading,
  };
};
