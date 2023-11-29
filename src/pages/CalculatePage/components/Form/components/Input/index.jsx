import './style.css';

export const Input = ({ type, label }) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor="">
        {label}
      </label>
      <input className="field__input" type={type} />
    </div>
  );
};
