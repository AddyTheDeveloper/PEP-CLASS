import React, { useState, useEffect } from 'react';
import './Banner.css';
import { movies } from '../data/mockData';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const originals = movies.fetchNetflixOriginals;
        setMovie(originals[Math.floor(Math.random() * originals.length)]);
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button banner__button--play">
                        <svg viewBox="0 0 24 24" fill="black" className="banner__icon">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                        Play
                    </button>
                    <button className="banner__button banner__button--info">
                        <svg viewBox="0 0 24 24" fill="white" className="banner__icon">
                            <path d="M11 7h2v2h-2zm0 4h2v6h-2z" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                        More Info
                    </button>
                </div>

                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
