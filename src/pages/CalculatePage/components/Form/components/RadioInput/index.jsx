import { formatPrice } from '../../formatPrice';

export const RadioInput = ({
  label,
  image,
  name,
  value,
  onSelect,
  checked,
  price,
}) => {
  return (
    <label className="checkbox__label">
      <div className="checkbox">
        <div className="checkbox__container">
          <img className="checkbox__img" src={image}></img>
          <div className="checkbox__price">{formatPrice(price)}</div>
        </div>
        <div className="checkbox__description">
          <input
            className="checkbox__input"
            type="radio"
            name={name}
            value={value}
            onChange={onSelect}
            checked={checked}
          />
          {label}
        </div>
      </div>
    </label>
  );
};
