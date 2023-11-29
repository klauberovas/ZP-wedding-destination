
export const RadioInput = ({label, image}) => {
    return (
      <div className="ceremony-type">
        <img src={image}></img>
      <input type="radio"/>
      {label}
      </div>
    );
  };
