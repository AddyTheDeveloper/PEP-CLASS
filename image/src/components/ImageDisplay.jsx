import React from 'react';

const ImageDisplay = () => {
  return (
    <div style={{ padding: '5px' }}>
      <img
        src="https://picsum.photos/400/300"
        alt="Collage Item"
        style={{ borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ImageDisplay;
