const apiKey = "y8GK28S2XgQflil3ZNe71MJtOkqdAT0g";

export const getGifs = async (categories) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${categories}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((images) => ({
    id: images.id,
    title: images.title,
    url: images.images.downsized_medium.url,
  }));

  return gifs;
};
