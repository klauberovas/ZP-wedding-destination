export const SelectInput = ({ data, label }) => {
  return (
    <div className="field">
      <label className="field__label">
        {label}
        <select>
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
      {data.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </>
  );
};
