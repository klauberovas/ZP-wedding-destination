import './style.css';

export const RadioInputDown = ({ label }) => {
  return (
    <div className="radio">
      <input className="radio-input" type="radio" />
      <label htmlFor="">{label}</label>
    </div>
  );
};
