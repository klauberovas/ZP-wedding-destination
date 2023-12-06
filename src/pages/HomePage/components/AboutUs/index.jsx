import './style.css';
import { Title } from '../../../../components/Title';

export const AboutUs = () => {
  return (
    <section className="about-us">
      <Title label="Proč s námi?" />
      <div className="container-flex">
        <div className="container-flex__item about-us__img right-corner hidden">
          <p className="photo__rights photo__rights--left">
            Photo by Adéla Boháčkova Photography
          </p>
          <div className="about-us__label hidden">
            <p>
              od <span className="about-us__large">2015</span>
            </p>
            <p>
              <span className="about-us__large">6.500</span> +
            </p>
          </div>
        </div>
        <div className="container-flex__item about-us__text">
          <p>
            Jsme cestovní agentura specializující se na zprostředkování svateb v
            exotických destinacích.
          </p>
          <p>
            Díky naší <strong>svatební kalkulačce</strong> si můžete spočítat
            náklady na vaši vysněnou svatbu. Cenově dostupné svatební balíčky
            jsou strukturované, takže můžete snadno přidat doplňkové služby a
            platit pouze za to co potřebujete.
          </p>
          <p>
            Náš tým s vámi bude spolupracovat na nalezení vysněného místa pro
            uspořádání vaší svatby a postárá se o vás a vaše hosty.
          </p>
        </div>
      </div>
    </section>
  );
};
