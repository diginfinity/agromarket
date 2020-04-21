import React from 'react';
import Nav from '../Nav';
import map from '../../../assets/map.svg';
import { useMediaQuery } from 'react-responsive';

function Footer() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1225 });
  const isMobile = useMediaQuery({ maxWidth: 799 })
  const isTablet = useMediaQuery({ minWidth: 800, maxWidth: 1224 });

  return isDesktopOrLaptop ? (
    <footer className="footer-container">
      <div className="uk-container">
        <Nav additional={false} />
        <div className="uk-margin-small-top footer-divider"></div>
      </div>
      <div className="uk-container uk-margin-large-top">
        <div className="footer-flex-container">
          <div className="footer-address-mail">
            <div className="footer-address">
              <p className="text-primary">
                <i className="fas fa-home"></i>&nbsp;&nbsp;Adresa:
              </p>
              <p className="white footer-address-value">Novosadski put 74, Veternik</p>
            </div>
            <div className="footer-mail">
              <p className="text-primary">
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;E-mail:
              </p>
              <p className="white">agromarket021@gmail.com</p>
            </div>
          </div>
          <div className="footer-phone-numbers">
            <p className="text-primary">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;Telefon
            </p>
            <p className="white">
              <span className="footer-phone-number-item">021/823-424</span><br/>
              <span className="footer-phone-number-item">021/823-425</span><br/>
              <span className="footer-phone-number-item">021/822-459</span>
            </p>
          </div>
          <div className="footer-work-time">
            <p className="text-primary">
              <i className="fas fa-clock"></i>&nbsp;&nbsp;Radno vreme
            </p>
            <p className="white">Pon-Pet: 9:00 - 17:00</p>
          </div>
          <div className="footer-map">
            <img src={map} alt="Map" />
          </div>
        </div>
        <small>&#169; Copyright Agromarket 021, 2018. All Rights Reserved.</small>
      </div>
    </footer>
  ) : isTablet ? (
    <footer className="footer-container">
      <div className="uk-container">
        <Nav additional={false} />
        <div className="uk-margin-small-top footer-divider"></div>
      </div>
      <div className="uk-container uk-margin-large-top">
        <div className="footer-flex-container">
          <div className="footer-address-mail">
            <div className="footer-address">
              <p className="text-primary">
                <i className="fas fa-home"></i>&nbsp;&nbsp;Adresa:
                </p>
                <p className="white footer-address-value">Novosadski put 74, Veternik</p>
              </div>
              <div className="footer-mail">
                <p className="text-primary">
                  <i className="fas fa-envelope"></i>&nbsp;&nbsp;E-mail:
                  </p>
                  <p className="white">agromarket021@gmail.com</p>
                </div>
              </div>
              <div className="footer-phone-numbers">
                <p className="text-primary">
                  <i className="fas fa-phone"></i>&nbsp;&nbsp;Telefon
                  </p>
                  <p className="white">
                    <span className="footer-phone-number-item">021/823-424</span><br/>
                    <span className="footer-phone-number-item">021/823-425</span><br/>
                    <span className="footer-phone-number-item">021/822-459</span>
                  </p>
                </div>
                <div className="footer-map">
                    <p className="text-primary">
                      <i className="fas fa-clock"></i>&nbsp;&nbsp;Radno vreme
                      </p>
                      <p className="white">Pon-Pet: 9:00 - 17:00</p>
                  <img src={map} alt="Map" />
                </div>
                </div>
                <small>&#169; Copyright Agromarket 021, 2018. All Rights Reserved.</small>
              </div>
            </footer>

  ) : isMobile ? (
    <footer className="footer-container">
      <div className="uk-container">
        <Nav additional={false} />
        <div className="uk-margin-small-top footer-divider"></div>
      </div>
      <div className="uk-container uk-margin-large-top">
        <div className="footer-flex-container">
          <div className="footer-address-mail">
            <div className="footer-address">
              <p className="text-primary">
                <i className="fas fa-home"></i>&nbsp;&nbsp;Adresa:
              </p>
              <p className="white footer-address-value">Novosadski put 74, Veternik</p>
            </div>
            <div className="footer-mail">
              <p className="text-primary">
                <i className="fas fa-envelope"></i>&nbsp;&nbsp;E-mail:
              </p>
              <p className="white">agromarket021@gmail.com</p>
            </div>
          </div>
          <div className="footer-phone-numbers">
            <p className="text-primary">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;Telefon
            </p>
            <p className="white">
              <span className="footer-phone-number-item">021/823-424</span><br/>
              <span className="footer-phone-number-item">021/823-425</span><br/>
              <span className="footer-phone-number-item">021/822-459</span>
            </p>
          </div>
          <div className="footer-work-time">
            <p className="text-primary">
              <i className="fas fa-clock"></i>&nbsp;&nbsp;Radno vreme
            </p>
            <p className="white">Pon-Pet: 9:00 - 17:00</p>
          </div>
          <div className="footer-map">
            <img src={map} alt="Map" />
          </div>
        </div>
      </div>
    </footer>
  ) : null
}

export default Footer;
