import React from "react";
import "./ImageGrid.css"; // Import the new CSS file

const imageURLs = Array.from(
  { length: 57 },
  (_, i) => `../src/assets/Downloads/imgine (${i + 1}).png`
);

const ImageGrid: React.FC = () => {
  return (
    <div className="grid-container">
      {imageURLs.map((url, index) => (
        <div key={index} className="grid-item">
          <img src={url} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
