import './style.css';

export const RadioInputDown = ({ label, name, value, onSelect }) => {
  return (
    <div className="radio">
      <input className="radio-input" type="radio" name={name} value={value} onChange={onSelect}/>
      <label htmlFor="">{label}</label>
    </div>
  );
};
