import React, { useState, useEffect } from 'react';

const MovieGallery = ({ title, query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=382f246a&s=${query}`);
        if (!response.ok) throw new Error('Error fetching data');
        const data = await response.json();
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-danger">Failed to load movies.</div>;

  return (
    <div className="my-4">
      <h3 className="text-white">{title}</h3>
      <div className="row">
        {movies.map(movie => (
          <div key={movie.imdbID} className="col-md-3 mb-4">
            <div className="card">
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;
