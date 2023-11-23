import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./style.css";

const ImageGallery = ({ images }) => {
  const [image, setImage] = useState(0);

  const showNextImage = () => {
    setImage((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImage((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <div className="photo-container">
      <div className="photo">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={image !== index}
            className="img-gallery"
            style={{ translate: `${-100 * image}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-btn"
        style={{ left: 0 }}
      >
        <ChevronLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ChevronRight aria-hidden />
      </button>
      <div className="img-photogalery"
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImage(index)}
          >
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
