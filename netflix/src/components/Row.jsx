import React from 'react';
import './Row.css';

function Row({ title, movies, isLargeRow }) {
    const base_url = "https://image.tmdb.org/t/p/original/";

    // Fallback image in case of error or missing path
    const handleError = (e) => {
        e.target.src = "https://via.placeholder.com/150x225/111/fff?text=Netflix";
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
                {movies && movies.map(movie => {
                    // Check if path exists, if not it might be a full URL in mockData
                    // My mockData has FULL URLs, so we use them directly.
                    // But if standard TMDB paths are used later, we might need base_url logic.
                    // Current mockData: "https://image.tmdb.org..."

                    let src = isLargeRow ? movie.poster_path : movie.backdrop_path;

                    if (!src) return null; // Skip if no image

                    return (
                        <img
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={src}
                            alt={movie.name}
                            onError={handleError}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Row;
