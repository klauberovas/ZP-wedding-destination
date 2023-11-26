import './style.css';

export const Step = ({ icon, text, alt, url }) => {
  return (
    <div className="step">
      <a href={url === null ? '#destination' : url}>
        <div className="step__icon">
          <img src={icon} alt={alt} />
        </div>
        <p className="step__text">{text}</p>
      </a>
    </div>
  );
};
