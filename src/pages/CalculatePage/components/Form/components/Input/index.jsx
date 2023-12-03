import './style.css';

export const Input = ({ type, label, name, value, onSelect, min, pattern }) => {
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
        {...(type === 'number' ? { min: min } : {})}
        {...(type === 'tel'
          ? { pattern: pattern, placeholder: '777123456' }
          : {})}
        required
      />
    </div>
  );
};
