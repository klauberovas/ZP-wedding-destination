import { Link, Outlet } from 'react-router-dom';

export const App = () => {
 return (
    <>
      <nav>
        <Link to="/">Domů</Link>
        <span> | </span>
        <Link to="/package">Svatební zájezdy</Link>
        <span> | </span>
        <Link to="/wedding-calculate">Svatební kalkulačka</Link>
        <span> | </span>
        <Link to="/reference">Reference</Link>
        <span> | </span>
        <Link to="/contact">Kontakt</Link>
      </nav>
      <Outlet />
    </>
  );
};
