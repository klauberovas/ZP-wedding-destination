import './style.css';
import { Title } from '../../../../components/Title';

export const AboutUs = () => {
  return (
    <section className="about-us">
      <Title label="Proč s námi?" />
      <div className="container">
        <div className="container__item container__img hidden"></div>
        <div className="container__item">
          <p>
            Jsme cestovní agentura specializující se na zprostředkování svateb v
            exotických destinacích.
          </p>
          <p>
            Díky naší svatební kalkulačce si můžete spočítat náklady na vaši
            vysněnou svatbu. Cenově dostupné svatební balíčky jsou
            strukturované, takže můžete snadno přidat doplňkové služby a platit
            pouze za to co potřebujete.
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
