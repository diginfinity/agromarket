import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Nav(props) {
  const where = props.history.location.pathname
  return (
    <nav className="uk-navbar">
      <div className="uk-navbar-right nav-custom-container">
        {props.additional && (
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
        )}
        <ul className="uk-navbar-nav uk-margin-top">
          <li className={where === "/" && props.additional ? "uk-text-bold nav-custom-link nav-custom-active" : "uk-text-bold nav-custom-link"}>
            <Link to="/" className={where !== "/" && props.additional ? "black": "white"}>
              Pocetna
            </Link>
          </li>
          <li className={where === "/o-nama" && props.additional ? "uk-text-bold nav-custom-link nav-custom-active" : "uk-text-bold nav-custom-link"}>
            <Link to="/o-nama" className={where !== "/o-nama" && props.additional ? "black": "white"}>
              O nama
            </Link>
          </li>
          <li className={where === "/katalozi" && props.additional ? "uk-text-bold nav-custom-link nav-custom-active" : "uk-text-bold nav-custom-link"}>
            <Link to="/katalozi" className={where !== "/katalozi" && props.additional ? "black": "white"}>
              Katolozi
            </Link>
          </li>
          <li className={where.slice(0, 10) === "/asortiman" && props.additional ? "uk-text-bold nav-custom-link nav-custom-active" : "uk-text-bold nav-custom-link"}>
            <Link to="/asortiman" className={where !== "/asortiman" && props.additional ? "black": "white"}>
              Asortiman
            </Link>
          </li>
          <li className={where === "/kontakt" && props.additional ? "uk-text-bold nav-custom-link nav-custom-active" : "uk-text-bold nav-custom-link"}>
            <Link to="/kontakt" className={where !== "/kontakt" && props.additional ? "black": "white"}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Nav);
