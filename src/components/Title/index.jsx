import './style.css';

export const Title = ({ label }) => {
  return (
    <div className="title--line">
      <div className="title__line-one" />
      <h2 className="title">{label}</h2>
      <div className="title__line-two" />
    </div>
  );
};
