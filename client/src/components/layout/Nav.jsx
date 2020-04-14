import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FullSearchItem from './pagepart/FullSearchItem';
import HelpCard from './cards/HelpCard';
import serbia from '../../assets/flags/serbia.svg';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';

function Nav(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const where = props.history.location.pathname
  const [langFlag, setLangFlag] = useState("SRB")
  const closeHelp = () => setIsOpen(false)

  const openHelp = () => setIsOpen(true)

  const prepareHelp = () => {
    document.getElementById('overlay').style.height = `${document.body.scrollHeight}px`
    if (!isOpen) {
      document.getElementById('overlay').style.height = '0'
      return null;
    }

    const step1Coords = document.getElementById("step1").getBoundingClientRect()
    const step2Coords = document.getElementById("step2").getBoundingClientRect()
    const step3Coords = document.getElementById("step3").getBoundingClientRect()
    const step4Coords = document.getElementById("step4").getBoundingClientRect()
    const step5Coords = document.getElementById("step5").getBoundingClientRect()

    return (
      <HelpCard
        step1Coords={step1Coords}
        step2Coords={step2Coords}
        step3Coords={step3Coords}
        step4Coords={step4Coords}
        step5Coords={step5Coords}
        isOpen={isOpen}
        closeHelp={closeHelp}
      />
    );
  }

  return (
    <Fragment>
      <nav className="uk-navbar">
        <div className="uk-logo nav-custom-logo">
          <img src={logo} alt="Agromarket logo"/>
        </div>
        <div className={props.additional ? "uk-navbar-right nav-custom-container" : "uk-navbar-right"}>
          {props.additional && (
            <ul className="uk-navbar-nav uk-navbar-right nav-custom-placement uk-margin-top nav-help-custom-margin-right">
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
          <ul className="uk-navbar-nav uk-margin-top nav-main-custom-margin-right">
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
            <li
              className={
                where === "/katalozi" && props.additional ?
                "uk-text-bold nav-custom-link nav-custom-active" :
                "uk-text-bold nav-custom-link"
              }
              id="step4"
            >
              <Link to="/katalozi" className={where !== "/katalozi" && props.additional ? "black": "white"}>
                Katolozi
              </Link>
            </li>
            <li className={where.slice(0, 10) === "/asortiman" && props.additional ? "uk-text-bold nav-custom-link nav-custom-active" : "uk-text-bold nav-custom-link"}>
              <Link to="/asortiman" className={where !== "/asortiman" && props.additional ? "black": "white"}>
                Asortiman
              </Link>
            </li>
            <li
              className={
                where === "/kontakt" && props.additional ?
                "uk-text-bold nav-custom-link nav-custom-active" :
                "uk-text-bold nav-custom-link"
              }
              id="step5"
            >
              <Link to="/kontakt" className={where !== "/kontakt" && props.additional ? "black": "white"}>
                Kontakt
              </Link>
            </li>
            {props.additional ? (
              <li className="uk-text-bold uk-margin-small-left uk-text-bold nav-custom-link">
                <div style={{ display: "flex", alignItems: "center" }}>
                {langFlag === "SRB" ? (
                  <img src={serbia} alt="Serbian Flag" style={{ width: "25px", height: "17px" }} />
                ) : (
                  <img src={serbia} alt="Serbian Flag" style={{ width: "25px", height: "17px" }} />
                )}
                <select className="uk-select black nav-select" onChange={(e) => setLangFlag(e.target.value)}>
                  <option value="SRB">
                    SRB
                  </option>
                  <option value="ENG">
                    ENG
                  </option>
                </select>
              </div>
              </li>
            ) : null}
          </ul>
        </div>
      </nav>
      {props.additional && (
        <div className="uk-container uk-margin-top">
          <FullSearchItem />
          <div className="uk-text-right uk-margin-top">
            <button
              className="uk-button uk-border-rounded uk-text-bold bg-primary white"
              onClick={openHelp}
              >
              Pomoc
            </button>
          </div>
        </div>
      )}
      {prepareHelp()}
    </Fragment>
  );
}

export default withRouter(Nav);
