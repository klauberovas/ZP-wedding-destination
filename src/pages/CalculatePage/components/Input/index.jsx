export const Input = ({ type, label }) => {
  return (
    <label className="wedding-calculate__field" htmlFor="">
      {label}
      <input type={type} />
    </label>
  );
};
