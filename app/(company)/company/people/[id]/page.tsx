import { Suspense } from "react";
import MovieDetail from "../../../../../components/movie-detail";
import Videos from "../../../../../components/movie-video";
const getMovies = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(
    `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
  );
  const json = await response.json();
  return json;
};

export async function generateMetadata({ params: { id } }) {
  const movies = await getMovies(id);
  return {
    title: movies.title,
  };
}

export default async function Detail({ params: { id } }) {
  return (
    <>
      <h1>detail</h1>
      <h2>video</h2>
      <Suspense fallback={<h3>loading videos</h3>}>
        <MovieDetail id={id} />
      </Suspense>
      <h2>video</h2>
      <Suspense fallback={<h3>loading movie</h3>}>
        <Videos id={id} />
      </Suspense>
    </>
  );
}
