import './style.css';
import { useFormContext } from 'react-hook-form';

export const Checkbox = ({ name, text, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <label>
      <input
        {...register(name, { required: required })}
        type="checkbox"
        name={name}
      />
      {errors[name] && <span>Toto pole je povinné</span>}
      {text}
    </label>
  );
};
