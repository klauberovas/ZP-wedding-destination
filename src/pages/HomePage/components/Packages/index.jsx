import { Package } from '../Package';
import { dataPackages } from './DataPackages';
import './style.css';

export const Packages = () => {
  return (
    <section className="packages">
      <h2 className="title title--semibold title--line">Svatební balíčky</h2>
      <p className="text--center text--mobile">
        V naší nabídce najdete tři kategorie svatebních balíčků vztahující se na
        všechny naše destinace.
      </p>
      <div className="packages__container">
        {dataPackages.map((item) => (
          <Package key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};
