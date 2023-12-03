import { formatPrice } from '../../formatPrice';
import { useFormContext } from 'react-hook-form';

export const RadioInput = ({ label, image, name, value, price }) => {
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
            {...register(name, { required: true })}
            className="checkbox__input"
            type="radio"
            name={name}
            value={value}
          />
          {errors[name] && <span>Toto pole je povinné</span>}
          {label}
        </div>
      </div>
    </label>
  );
};
