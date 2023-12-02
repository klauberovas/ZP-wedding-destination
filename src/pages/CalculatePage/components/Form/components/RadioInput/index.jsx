export const RadioInput = ({
  label,
  image,
  name,
  value,
  onSelect,
  checked,
}) => {
  return (
    <label className="checkbox__label">
      <div className="checkbox">
        <img className="checkbox__img" src={image}></img>
        <div className="checkbox__description">
          <input
            className="checkbox__input"
            type="radio"
            name={name}
            value={value}
            onChange={onSelect}
            checked={checked}
          />
          {label}
        </div>
      </div>
    </label>
  );
};
