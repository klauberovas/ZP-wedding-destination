import './style.css';

export const Title = ({ label }) => {
  return (
    <div className="title-line">
      <div className="line-one" />
      <h2 className="title" style={{ margin: '0 10px' }}>
        {label}
      </h2>
      <div className="line-two" />
    </div>
  );
};
