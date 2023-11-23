import { Package } from '../Package';
import { dataPackages } from './DataPackages';
import './style.css';

export const Packages = () => {
  return (
    <section className="packages">
      <h2 className="title title--semibold title--line">Svatební balíčky</h2>
      <div className="packages__container">
        {dataPackages.map((item) => (
          <Package key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
