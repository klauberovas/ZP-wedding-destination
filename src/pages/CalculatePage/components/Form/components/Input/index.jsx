import './style.css';

export const Input = ({ type, label, name, value, onSelect }) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor="">
        {label}
      </label>
      <input
        className="field__input"
        type={type}
        onChange={onSelect}
        name={name}
        value={value}
      />
    </div>
  );
};
