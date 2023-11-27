import './style.css';

export const ReferenceGallery = ({ photo, alt }) => {
  return <img className="reference__gallery-photo" src={photo} alt={alt} />;
};
