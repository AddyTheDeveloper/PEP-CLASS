import React from 'react';
import './App.css';
import Row from './components/Row';
import { movies } from './data/mockData';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        movies={movies.fetchNetflixOriginals}
        isLargeRow
      />
      <Footer />
    </div>
  );
}

export default App;
