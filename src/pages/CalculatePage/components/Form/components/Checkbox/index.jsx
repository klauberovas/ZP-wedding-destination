import './style.css';
import { useFormContext } from 'react-hook-form';

export const Checkbox = ({ name, text, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = errors[name];

  return (
    <label className="checkbox__label">
      <input
        className="checkbox__input"
        {...register(name, { required: required })}
        type="checkbox"
        name={name}
      />

      <span className={`checkbox__text ${isError ? 'required--input' : null}`}>
        {text}
      </span>
    </label>
  );
};
