import './style.css';

export const RadioInputDown = ({ label, name }) => {
  return (
    <div className="radio">
      <input className="radio-input" type="radio" name={name} />
      <label htmlFor="">{label}</label>
    </div>
  );
};
