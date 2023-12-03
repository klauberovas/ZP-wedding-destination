import './style.css';

export const Checkbox = ({ onSelect, name, text, required, checked }) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={onSelect}
        name={name}
        checked={checked}
        {...(required ? { required: true } : {})}
      />
      {text}
    </label>
  );
};
