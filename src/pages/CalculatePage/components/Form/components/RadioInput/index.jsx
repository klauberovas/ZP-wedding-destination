import { formatPrice } from '../../formatPrice';
import { useFormContext } from 'react-hook-form';

export const RadioInput = ({ label, image, name, value, price }) => {
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
            {...register(name, { required: true })}
            className="checkbox-img__input"
            type="radio"
            name={name}
            value={value}
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
