import './style.css';
import { formatPrice } from '../../formatPrice';
import { useFormContext } from 'react-hook-form';

export const CheckboxWithImg = ({
  label,
  image,
  value,
  name,
  onSelect,
  checked,
  disabled,
  price,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label className="checkbox__label">
      <div className="checkbox">
        <div className="checkbox__container">
          <img className="checkbox__img" src={image}></img>
          <div className="checkbox__price">{formatPrice(price)}</div>
        </div>
        <div className="checkbox__description">
          <input
            {...register(name)}
            className="checkbox__input"
            type="checkbox"
            value={value}
            disabled={disabled}
          />
          {errors[name] && <span>Toto pole je povinné</span>}
          {label}
        </div>
      </div>
    </label>
  );
};
