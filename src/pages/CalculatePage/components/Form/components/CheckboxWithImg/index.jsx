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
    <label className="checkbox-img__label">
      <div className="checkbox-img">
        <div className="checkbox-img__container">
          <img className="checkbox-img__img" src={image}></img>
          <div className="checkbox-img__price">{formatPrice(price)}</div>
        </div>
        <div className="checkbox-img__description">
          <input
            {...register(name)}
            className="checkbox-img__input"
            type="checkbox"
            value={value}
            disabled={disabled}
          />
          {errors[name] && (
            <span className="required--input">Toto pole je povinné</span>
          )}
          {label}
        </div>
      </div>
    </label>
  );
};
