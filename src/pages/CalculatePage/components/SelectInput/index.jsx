export const SelectInput = ({ data, label }) => {
  return (
    <>
      <label>{label}</label>
      <select>
        <Option data={data} />
      </select>
    </>
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
