import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
function MainCard({ img, title, desc, isAccentuated, to, text }) {
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 950 });
  const isMobile = useMediaQuery({ maxWidth: 600 })
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 951 });

  return isTablet ? (
    <div className={isAccentuated ? "uk-flex main-card-container main-card-container-accent" : "uk-flex main-card-container"}>
      <div className="main-card-content">
        <div className="uk-flex uk-flex-middle main-card-first-row">
          {img && (
            <div className="main-card-image">
              <img src={img} uk-img />
            </div>
          )}
          <h3 className="uk-text-bold uk-margin-top uk-margin-left">{title}</h3>
        </div>
        <p>{desc}</p>
        <Link
          to={to}
          className="uk-display-block uk-text-center main-card-danger-link"
        >
          {text}
        </Link>
      </div>
    </div>
  ) : (
    <div className={isAccentuated ? "uk-flex main-card-container main-card-container-accent" : "uk-flex main-card-container"}>
      {img && (
        <div className="main-card-image">
          <img src={img} uk-img />
        </div>
      )}
      <div className="main-card-content">
        <h3 className="uk-text-bold uk-margin-top uk-text-bold">{title}</h3>
        <p>{desc}</p>
        <Link
          to={to}
          className="uk-display-block uk-text-center main-card-danger-link"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}

export default MainCard;
