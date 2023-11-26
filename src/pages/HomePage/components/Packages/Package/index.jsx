import './style.css';

export const Package = ({ item }) => {
  return (
    <div className="package">
      <h3 className="package__name">{item.name}</h3>
      <ul className="package__list">
        {item.contains === null ? null : (
          <h5 className="package__contains">{item.contains}</h5>
        )}
        {item.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="package__price">Svatební balíček od {item.price},-</p>
    </div>
  );
};
