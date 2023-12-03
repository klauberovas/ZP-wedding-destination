import './style.css';
import { useFormContext } from 'react-hook-form';

export const RadioInputDown = ({ label, name, value }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label>
      <div className="radio">
        <input
          {...register(name, { required: true })}
          className="radio-input"
          type="radio"
          name={name}
          value={value}
          required
        />
        {errors[name] && <span>Toto pole je povinné</span>}
        {label}
      </div>
    </label>
  );
};
