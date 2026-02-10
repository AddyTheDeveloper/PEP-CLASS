import React from 'react';
import './App.css';
import ImageDisplay from './components/ImageDisplay';

function App() {
  return (
    <>
      <div className="card">
        <h1>Component Image </h1>
        <p>Here are 5 images for you:</p>
        <div className="image-grid">
          {Array.from({ length: 5 }).map((_, index) => (
            <ImageDisplay key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
