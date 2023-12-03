export const SelectInput = ({ data, label, name, value, onSelect }) => {
  return (
    <div className="field">
      <label className="field__label">
        {label}
        <select onChange={onSelect} name={name} value={value} required>
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
