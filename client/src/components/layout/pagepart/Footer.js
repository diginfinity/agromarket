import React from 'react';
import Nav from '../Nav';

function Footer() {

  return (
    <footer className="footer-container">
      <div className="uk-container">
        <Nav additional={false} />
        <div className="uk-margin-small-top footer-divider"></div>
      </div>
      <div className="uk-container uk-margin-large-top">
        <div className="uk-grid">
          <div className="uk-grid uk-width-2-3@m">
            <div className="uk-width-1-3@m">
              <div>
                <p className="text-primary">
                  <i className="fas fa-home"></i>&nbsp;&nbsp;Adresa:
                </p>
                <p>
                  <u className="white">Novosadski put 74, Veternik</u>
                </p>
              </div>
              <div>
                <p className="text-primary">
                  <i className="fas fa-envelope"></i>&nbsp;&nbsp;E-mail:
                </p>
                <p className="white">agromarket021@gmail.com</p>
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div>
                <p className="text-primary">
                  <i className="fas fa-phone"></i>&nbsp;&nbsp;Telefon
                </p>
                <p className="white">
                  <span className="uk-display-inline-block">021/823-424</span><br/>
                  <span className="uk-display-inline-block uk-padding-small uk-padding-remove-horizontal">021/823-425</span><br/>
                  <span className="uk-display-inline-block">021/822-459</span>
                </p>
              </div>
            </div>
            <div className="uk-width-1-3@m">
              <div>
                <p className="text-primary">
                  <i className="fas fa-clock"></i>&nbsp;&nbsp;Radno vreme
                </p>
                <p className="white">Pon-Pet: 9:00 - 17:00</p>
              </div>
            </div>
          </div>
          <div className="uk-width-1-3@m">
            <div className="uk-width-1-1">
              <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11235.922610567395!2d19.767022!3d45.248184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x47b638c794b496a4!2sAGROMARKET%20doo%20VETERNIK!5e0!3m2!1ssr!2srs!4v1589876431910!5m2!1ssr!2srs" width="100%" height="350px" frameborder="0" style={{border: 1, borderRadius: '10px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container uk-margin-top">
        <small>&#169; Copyright Agromarket 021, 2018. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
