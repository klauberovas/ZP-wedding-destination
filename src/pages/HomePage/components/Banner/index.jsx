import './style.css';

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__title">
        <div className="banner__logo"></div>
        <h1 className="title title--regular">
          Svatba v zahraničí podle Vašich představ
        </h1>
      </div>
      <div className="banner__photo">
        <p className="photo__rights photo__rights--right">
          Photo by Adéla Boháčkova Photography
        </p>
      </div>
    </section>
  );
};
