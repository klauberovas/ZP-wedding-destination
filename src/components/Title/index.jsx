import './style.css';

export const Title = ({ label }) => {
  return (
    <div className="title-line">
      <div className="line-one" />
      <h2 className="title">{label}</h2>
      <div className="line-two" />
    </div>
  );
};
