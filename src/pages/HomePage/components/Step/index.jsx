import './style.css';

export const Step = ({ icon, text, alt }) => {
  return (
    <div className="step">
      <div className="step__icon">
        <img src={icon} alt={alt} />
      </div>
      <p className="step__text">{text}</p>
    </div>
  );
};
