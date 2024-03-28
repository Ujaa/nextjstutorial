import { useEffect, useState } from "react";
import Navigation from "../components/navigation";
import Link from "next/link";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function MainPage() {
  const getMovies = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const response = await fetch(URL);
    const json = await response.json();
    return json;
  };

  const movies = await getMovies();

  return (
    <>
      <h1>Hello NextJS</h1>
      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/company/people/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </>
  );
}
