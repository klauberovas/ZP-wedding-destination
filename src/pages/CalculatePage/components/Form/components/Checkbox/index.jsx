import './style.css';
import { formatPrice } from '../../formatPrice';

export const Checkbox = ({
  label,
  image,
  value,
  name,
  onSelect,
  checked,
  disabled,
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
