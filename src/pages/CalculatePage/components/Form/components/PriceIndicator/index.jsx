import './style.css';

export const PriceIndicator = ({ totalPrice }) => {
  return (
    <div className="wedding-calculate__price">
      <div className="price-total">{totalPrice}</div>
    </div>
  );
};
