import './style.css';

export const Checkbox = ({
  label,
  image,
  value,
  name,
  onSelect,
  checked,
  disabled,
}) => {
  return (
    <label className="service-item__label checkbox__label">
      <div className="service-item checkbox">
        <img className="service-item__img checkbox__img" src={image}></img>

        <div className="checkbox__description">
          <input
            className="service-item__input checkbox__input"
            type="checkbox"
            onChange={onSelect}
            value={value}
            name={name}
            checked={checked}
            disabled={disabled}
          />
          {label}
        </div>
      </div>
    </label>
  );
};
