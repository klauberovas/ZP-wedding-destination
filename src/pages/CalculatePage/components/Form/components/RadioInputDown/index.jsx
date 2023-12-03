import './style.css';

export const RadioInputDown = ({ label, name, value, onSelect }) => {
  return (
    <label htmlFor="">
      <div className="radio">
        <input
          className="radio-input"
          type="radio"
          name={name}
          value={value}
          onChange={onSelect}
          required
        />
        {label}
      </div>
    </label>
  );
};
