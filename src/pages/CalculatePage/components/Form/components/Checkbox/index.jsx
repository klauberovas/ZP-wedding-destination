import './style.css';

export const Checkbox = ({ label, image }) => {
  return (
    <div className="service-item checkbox">
      <img className="service-item__img checkbox__img" src={image}></img>

      <div className="checkbox__description">
        <input
          className="service-item__input checkbox__input"
          type="checkbox"
        />
        <label className="service-item__label checkbox__label">{label}</label>
      </div>
    </div>
  );
};
