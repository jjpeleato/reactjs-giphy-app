export const GifExpertApp = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  return (
    <>
      <h1>GifExpertApp</h1>
      <p>{apiKey}</p>
      <p>{apiUrl}</p>
    </>
  );
};
