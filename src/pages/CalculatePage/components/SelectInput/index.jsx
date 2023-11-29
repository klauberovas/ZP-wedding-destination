export const SelectInput = ({ data, label }) => {
  return (
    <label className="wedding-calculate__field">
      {label}
      <select>
        <Option data={data} />
      </select>
    </label>
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
