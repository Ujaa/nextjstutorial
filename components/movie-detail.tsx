import { Suspense } from "react";

export default async function MovieDetail({ id }) {
  const getMovies = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(
      `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
    );
    const json = await response.json();
    return json;
  };

  const movie = await getMovies(id);

  return (
    <>
      <div>{JSON.stringify(movie)}</div>
    </>
  );
}
