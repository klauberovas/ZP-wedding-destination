import './style.css';

export const Reference = ({ photo, author, text, alt, corner }) => {
  return (
    <section className="reference">
      <div className="reference__item reference__img">
        <img className={`${corner}`} src={photo} alt={alt} />
      </div>
      <div className="reference__item reference__description">
        <h2 className="reference__title">{author}</h2>
        <p className="reference__text">{text}</p>
      </div>
    </section>
  );
};
