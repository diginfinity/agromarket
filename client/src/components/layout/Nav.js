import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FullSearchItem from './pagepart/FullSearchItem';
import HelpCard from './cards/HelpCard';
import serbia from '../../assets/flags/serbia.svg';
import logo from '../../assets/logo.svg';
import hamburger from '../../assets/hamburger.svg';
import { useMediaQuery } from 'react-responsive';

function Nav(props) {
  const isTablet = useMediaQuery({ minWidth: 800, maxWidth: 1224 });
  const isMobile = useMediaQuery({ maxWidth: 799 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });
  const [isOpen, setIsOpen] = useState(false)
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false)
  const where = props.history.location.pathname
  const [langFlag, setLangFlag] = useState("SRB")
  const closeHelp = () => setIsOpen(false)
  const openHelp = () => setIsOpen(true)

  const dimSmallerNavigation = () => {
    if (!menu) {
      document.getElementById('overlay').style.height = 0
      return null
    }

    document.getElementById('overlay').style.height = `${document.body.scrollHeight}px`
    return (
      <div className="nav-smaller-container">
        <i
          className="fas fa-times fa-2x nav-smaller-close pointer"
          onClick={() => {
            setMenu(!menu);
            document.getElementById('overlay').style.height = 0}
          }
        />
        <li
          className={
            where === "/" && props.additional ?
            "uk-text-bold nav-custom-link nav-custom-active" :
            "uk-text-bold nav-custom-link"}
        >
          <Link to="/" className="white upper">
            Pocetna
          </Link>
        </li>
        <li
          className={
            where === "/o-nama" && props.additional ?
            "uk-text-bold nav-custom-link nav-custom-active" :
            "uk-text-bold nav-custom-link"}
        >
          <Link to="/o-nama" className="white upper">
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
          <Link to="/katalozi" className="white upper">
            Katolozi
          </Link>
        </li>
        <li className={where.slice(0, 10) === "/asortiman" && props.additional ? "uk-text-bold nav-custom-link nav-custom-active" : "uk-text-bold nav-custom-link"}>
          <Link to="/asortiman" className="white upper">
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
          <Link to="/kontakt" className="white upper">
            Kontakt
          </Link>
        </li>
      </div>
    )
  }

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
      {isDesktopOrLaptop && (
        <Fragment>
          <nav className="uk-navbar">
            <div className="uk-logo nav-custom-logo" style={{ marginLeft: !props.additional && 0 }}>
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
      )}

      {isTablet && (
        <Fragment>
          <nav className="uk-navbar uk-flex uk-flex-column" style={{ flexFlow: !props.additional && 'row'}}>
            {props.additional ? (
              <div className="uk-flex uk-flex-between">
                <div className="uk-logo nav-custom-logo" style={{ marginLeft: !props.additional && 0 }}>
                  <img src={logo} alt="Agromarket logo"/>
                </div>
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
              </div>
              ) : (
                <div className="uk-logo nav-custom-logo" style={{ marginLeft: !props.additional && 0 }}>
                  <img src={logo} alt="Agromarket logo"/>
                </div>
              )
            }
              <div className={props.additional ? "uk-navbar-right nav-custom-container" : "uk-navbar-right"}>
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
      )}

      {isMobile && (
        <Fragment>
          <nav className="uk-navbar uk-flex-between nav-smaller-devices">
            <div className="uk-logo nav-custom-logo" style={{ marginLeft: props.additional ? "160px" : 0 }}>
              <img src={logo} alt="Agromarket logo"/>
            </div>
            <div className={props.additional ? "uk-navbar-right nav-custom-container" : "uk-navbar-right"}>
              <ul className="uk-navbar-nav uk-margin-top nav-main-custom-margin-right">
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
                {
                  props.additional ? (
                    <li
                      className="uk-text-bold uk-margin-small-left uk-text-bold nav-custom-hamburger"
                      onClick={() => {setMenu(!menu); dimSmallerNavigation()}}
                    >
                      <img
                        src={hamburger}
                        alt="Menu toggler"
                      />
                    </li>
                  ) : (
                    <div
                      className="pointer"
                      onClick={() => document.documentElement.scrollTop = 0}
                    >Back to Top</div>
                  )
                }

                {menu && props.additional && dimSmallerNavigation()}
              </ul>
            </div>
          </nav>
          {props.additional && (
            <div className="uk-container uk-margin-top">
              <FullSearchItem />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}

export default withRouter(Nav);
