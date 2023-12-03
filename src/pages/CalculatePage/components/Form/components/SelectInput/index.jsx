import { useFormContext } from 'react-hook-form';

export const SelectInput = ({ data, label, name }) => {
  const { register } = useFormContext();
  return (
    <div className="field">
      <label className="field__label">
        {label}
        <select {...register(name)} required>
          <Option data={data} />
        </select>
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
