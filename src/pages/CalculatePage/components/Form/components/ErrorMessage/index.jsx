import './style.css';

export const ErrorMessage = ({ text, center }) => {
  return (
    <span className={`required--input ${center ? 'required--center' : null}`}>
      {text}
    </span>
  );
};
