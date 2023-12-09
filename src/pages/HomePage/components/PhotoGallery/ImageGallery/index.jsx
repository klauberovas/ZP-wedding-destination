import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './style.css';

export const ImageGallery = ({ images }) => {
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
         <p className="photo__rights photo__rights--left">
            Photos by Adéla Boháčkova Photography
          </p>
      </div>
      <button onClick={showPrevImage} className="img-btn" style={{ left: 0 }}>
        <ChevronLeft aria-hidden />
      </button>
      <button onClick={showNextImage} className="img-btn" style={{ right: 0 }}>
        <ChevronRight aria-hidden />
      </button>
    </div>
  );
};
