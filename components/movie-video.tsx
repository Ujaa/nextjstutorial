import { Suspense } from "react";

export default async function Videos({ id }) {
  const getVideos = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(
      `https://nomad-movies.nomadcoders.workers.dev/movies/${id}/videos`
    );
    const json = await response.json();
    return json;
  };

  const movie = await getVideos(id);

  return (
    <>
      <div>{JSON.stringify(movie)}</div>
    </>
  );
}
