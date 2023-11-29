export const Input = ({ type, label }) => {
  return (
    <label htmlFor="">
      {label}
      <input type={type} />
    </label>
  );
};
