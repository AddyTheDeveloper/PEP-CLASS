import React from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import DataRegistryForm from './components/DataRegistryForm';
import './index.css';

function App() {
  const movies = [
    {
      id: 1,
      title: 'Stranger Things',
      rating: 8.7,
      releaseDate: '2016',
      description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg'
    },
    {
      id: 2,
      title: 'The Crown',
      rating: 8.6,
      releaseDate: '2016',
      description: 'Follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the twentieth century.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg'
    },
    {
      id: 3,
      title: 'Breaking Bad',
      rating: 9.5,
      releaseDate: '2008',
      description: 'A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family\'s future.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg'
    },
    {
      id: 4,
      title: 'Inception',
      rating: 8.8,
      releaseDate: '2010',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/9gk7admal4ZLcnwnCSJORyZ07I2.jpg'
    },
    {
      id: 5,
      title: 'The Dark Knight',
      rating: 9.0,
      releaseDate: '2008',
      description: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
      id: 6,
      title: 'Interstellar',
      rating: 8.6,
      releaseDate: '2014',
      description: 'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      imageUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    }
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <section className="movies-section">
          <h2>Popular on Netflix</h2>
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                rating={movie.rating}
                releaseDate={movie.releaseDate}
                description={movie.description}
                imageUrl={movie.imageUrl}
              />
            ))}
          </div>
        </section>

        <section className="registry-section">
          <DataRegistryForm />
        </section>
      </div>
    </div>
  );
}

export default App;
