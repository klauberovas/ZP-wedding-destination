import './style.css';

export const PackageInfo = ({ currentPackage }) => {
  return (
    <div className="wedding-calculate__package">
      <h6>* V ceně balíčku je </h6>
      <ul className="wedding-calculate__package--content">
        {currentPackage.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
