import './style.css';
import { useFormContext } from 'react-hook-form';

export const Input = ({ type, label, name, min, pattern }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="field">
      <label className="field__label" htmlFor={name}>
        {label}
      </label>
      <input
        {...register(name, { required: true })}
        className="field__input"
        type={type}
        id={name}
        {...(type === 'number' ? { min: min } : {})}
        {...(type === 'tel'
          ? { pattern: pattern, placeholder: '777123456' }
          : {})}
      />
      {errors[name] && <span>Toto pole je povinné</span>}
    </div>
  );
};
