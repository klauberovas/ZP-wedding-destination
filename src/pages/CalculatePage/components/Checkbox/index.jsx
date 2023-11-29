import './style.css';

export const Checkbox = ({ label, image }) => {
  return (
    <div className="service-item">
      <img className="service-item__img" src={image}></img>

      <label className="service-item__label">
        <input className="service-item__input" type="checkbox" />
        {label}
      </label>
    </div>
  );
};
