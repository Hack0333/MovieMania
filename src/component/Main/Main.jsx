import React from "react";
import "../../Movie.css";
import { useAuth } from "../../context";
import Box from "../Box";
import Movie from "./Movie";
import WatchedMoviesList from "./WatchedMoviesList";
import WatchedSummary from "./WatchedSummary";
import MovieDetails from "./MovieDetails";

const Main = () => {
  const {
    isLoading,
    error,
    selectedId,
    watched,
    movies,
    handleSelectMovie,
    handleCloseMovie,
    handleAddWatched,
    handleDeleteWatched,
  } = useAuth();
  return (
    <main className="main">
      <Box>
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && !error && (
          <ul className="list list-movies">
            {movies?.map((movie) => (
              <Movie
                movie={movie}
                key={movie.imdbID}
                onSelectMovie={handleSelectMovie}
              />
            ))}
          </ul>
        )}
        {error && (
          <p className="error">
            <span>⛔️</span> {error}
          </p>
        )}
      </Box>
      <Box>
        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            onCloseMovie={handleCloseMovie}
            onAddWatched={handleAddWatched}
            watched={watched}
          />
        ) : (
          <>
            <WatchedSummary watched={watched} />
            <WatchedMoviesList
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          </>
        )}
      </Box>
    </main>
  );
};

export default Main;
