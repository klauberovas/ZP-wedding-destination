
export const RadioInputDown = ({label, image}) => {
  return (
    <div className="radio-input__type">
      <img src={image}></img>
    <input className="radio-input" type="radio"/>
    {label}
    </div>
  );
};
