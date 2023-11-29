export const RadioInput = ({ label, image }) => {
  return (
    <div className="checkbox">
      <img className="checkbox__img" src={image}></img>
      <div className="checkbox__description">
        <input className="checkbox__input" type="radio" />
        <label className="checkbox__label">{label}</label>
      </div>
    </div>
  );
};
