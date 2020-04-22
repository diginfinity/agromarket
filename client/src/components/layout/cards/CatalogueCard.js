import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

const hoverStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 4
}

function CatalogueCard({ img, name }) {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div
      style={{ margin: "1rem 1.5rem" }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Fragment>
        {!isHovering ? (
          <img src={img} alt={name} />
        ) : (
          <div style={{ position: 'relative' }}>
            <img src={img} alt={name} />
            <div style={hoverStyle} className="uk-flex uk-flex-middle uk-flex-column uk-flex-center">
              <h2 className="uk-text-center uk-text-bold">{name}</h2>
              <Link to={`/katalog/${name}`} className="uk-text-bold">Pogledajte katalog</Link>
              <Link className="uk-margin-top text-primary uk-text-bold">
                Skinite katalog <i className="fas fa-cloud-download-alt" />
            </Link>
            </div>
          </div>
        )}
      </Fragment>
    </div>
  );
}

export default CatalogueCard;
