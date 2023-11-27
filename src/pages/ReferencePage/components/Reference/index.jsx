import { ReferenceGallery } from '../ReferenceGallery';
import './style.css';

export const Reference = ({
  photo,
  author,
  text,
  alt,
  corner,
  order,
  gallery,
}) => {
  return (
    <div className="reference container-flex">
      <div className={`container-flex__item reference__img ${order}`}>
        <img className={`${corner}`} src={photo} alt={alt} />
      </div>
      <div className="container-flex__item reference__description">
        <h2 className="reference__title text--center">{author}</h2>
        <p className="reference__text">{text}</p>
      </div>
      <div className="reference__gallery reference__gallery--hidden">
        {gallery.map(({ photo, alt }, index) => (
          <ReferenceGallery key={index} photo={photo} alt={alt} />
        ))}
      </div>
    </div>
  );
};
