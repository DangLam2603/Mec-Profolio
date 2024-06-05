import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./ImageGrid.css";

const imageURLs = Array.from(
  { length: 57 },
  (_, i) => `../src/assets/Downloads/imgine (${i + 1}).png`
);

const ImageGrid: React.FC = () => {
  return (
    <div className="grid-container">
      {imageURLs.map((url, index) => (
        <div key={index} className="grid-item">
          <LazyLoadImage src={url} alt={`Image ${index + 1}`} effect="blur" />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
