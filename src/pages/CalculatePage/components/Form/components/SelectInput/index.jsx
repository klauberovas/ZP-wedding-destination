import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage';

export const SelectInput = ({ data, label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="field">
      <label className="field__label">
        {label}
        <select {...register(name, { required: true })}>
          <Option data={data} />
        </select>
        {errors[name] && <ErrorMessage />}
      </label>
    </div>
  );
};

export const Option = ({ data }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {data.map(({ name }, index) => (
        <option key={index} value={name}>
          {name}
        </option>
      ))}
    </>
  );
};
