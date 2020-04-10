import React, { Fragment } from 'react';

function TableCard({ name, img, by, state, quantity, desc, dimensions}) {
  return (
    <tr className="uk-padding">
      <div className="table-margin-top"></div>
      <td className="card-item-padding table-card-name-field">
        <img src={img} alt={name} />
        <div className="table-card-name-details">
          <p className="uk-text-bold">
            {name}<br/>
            {by}
          </p>
          <p className="uk-text-bold text-primary">{by}</p>
        </div>
      </td>
      <td className="card-item-padding table-card-state-field">
        { state === "Ima na stanju" ? (
          <Fragment>
            <span className=" uk-text-center table-card-state-button table-card-button--success">Ima na stanju</span>
            <p>{quantity} kom.</p>
          </Fragment>
        ) : state === "Uskoro" ? (
          <span className=" uk-text-center table-card-state-button table-card-button--warning">Uskoro</span>
        ) : (
          <span className=" uk-text-center table-card-state-button table-card-button--danger">Nema na stanju</span>
        ) }
      </td>
      <td className="card-item-padding table-card-desc-field">{desc}</td>
      <td className="card-item-padding table-card-dim-field">{dimensions.join("x")}</td>
      <div className="table-margin-bot"></div>
    </tr>
  );
}

export default TableCard;
