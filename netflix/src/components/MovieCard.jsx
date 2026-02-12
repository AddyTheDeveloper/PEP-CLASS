import React, { useState } from 'react';

const MovieCard = ({ title, rating, releaseDate, description, imageUrl }) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <div className="movie-card" onClick={toggleDescription}>
            <div className="image-container">
                <img src={imageUrl} alt={title} className="movie-image" />
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`rating ${rating >= 7 ? 'good' : 'average'}`}>{rating}</span>
            </div>
            <div className="movie-details">
                <p>Release Date: {releaseDate}</p>
                {showDescription && <p className="description">{description}</p>}
            </div>
        </div>
    );
};

export default MovieCard;
