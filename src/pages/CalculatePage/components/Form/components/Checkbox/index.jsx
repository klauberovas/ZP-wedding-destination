import './style.css';

export const Checkbox = ({ label, image, value, name, onSelect }) => {
  return (
    <div className="service-item checkbox">
      <img className="service-item__img checkbox__img" src={image}></img>

      <div className="checkbox__description">
        <input
          className="service-item__input checkbox__input"
          type="checkbox"
          onChange={onSelect}
          value={name}
          name={name}
        />
        <label className="service-item__label checkbox__label">{label}</label>
      </div>
    </div>
  );
};
