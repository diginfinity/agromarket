import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(props) {
  const where = props.history.location.pathname
  return (
    <nav className="uk-navbar">
      <div className="uk-navbar-right nav-custom-container">
        <ul className="uk-navbar-nav uk-navbar-right nav-custom-placement uk-margin-top">
          <li className="nav-custom-moveaway">
            <i className="fas fa-home"></i> Novosadski put 74, Veternik
          </li>
          <li className="nav-custom-moveaway">
            <i className="fas fa-phone"></i>
            <span className="nav-custom-moveaway">021/823-424</span>
            <span className="nav-custom-moveaway">021/823-425</span>
            <span className="nav-custom-moveaway">021/822-459</span>
          </li>
        </ul>
        <ul className="uk-navbar-nav uk-margin-top">
          <li className={where === "/" ? "uk-text-bold uk-active nav-custom-link nav-custom-active" : "uk-text-bold uk-active nav-custom-link"}>
            <Link to="/">Pocetna</Link>
          </li>
          <li className={where === "/o-nama" ? "uk-text-bold uk-active nav-custom-link nav-custom-active" : "uk-text-bold uk-active nav-custom-link"}>
            <Link to="/o-nama">O nama</Link>
          </li>
          <li className={where === "/katalozi" ? "uk-text-bold uk-active nav-custom-link nav-custom-active" : "uk-text-bold uk-active nav-custom-link"}>
            <Link to="/katalozi">Katolozi</Link>
          </li>
          <li className={where === "/asortiman" ? "uk-text-bold uk-active nav-custom-link nav-custom-active" : "uk-text-bold uk-active nav-custom-link"}>
            <Link to="/asortiman">Asortiman</Link>
          </li>
          <li className={where === "/kontakt" ? "uk-text-bold uk-active nav-custom-link nav-custom-active" : "uk-text-bold uk-active nav-custom-link"}>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Nav);
