import React, { useState, Fragment } from 'react';
import Footer from '../layout/pagepart/Footer';
import TitleCard from '../layout/cards/TitleCard';
import FullSearchItem from '../layout/pagepart/FullSearchItem';
import img from '../../assets/loctite.svg';
import RepresentCard from '../layout/cards/RepresentCard';
import TableCard from '../layout/cards/TableCard';
import LogoStrip from '../layout/pagepart/LogoStrip';

function Product(props) {
  const [items, setItems] = useState([
    {
      name: "LOCT 603 BO 10ML",
      by: "LOCTITE",
      img,
      state: "Ima na stanju",
      quantity: 200,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quos.",
      dimensions: [180, 200, 100]
    },
    {
      name: "LOCT 603 BO 10ML",
      by: "LOCTITE",
      img,
      state: "Uskoro",
      quantity: null,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quos.",
      dimensions: [18, 20, 5]
    },
    {
      name: "LOCT 603 BO 10ML",
      by: "LOCTITE",
      img,
      state: "Ima na stanju",
      quantity: 30,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quos.",
      dimensions: [18, 20, 40]
    },
    {
      name: "LOCT 603 BO 10ML",
      by: "LOCTITE",
      img,
      state: "Nema na stanju",
      quantity: null,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, quos.",
      dimensions: [140, 20, 50]
    }
  ])

  const [represent, setRepresent] = useState([
    {
      name: "Fag",
      img
    },
    {
      name: "Loctite",
      img
    },
    {
      name: "Schaeffer Group",
      img
    },
    {
      name: "Corteco",
      img
    },
    {
      name: "CX",
      img
    },
    {
      name: "Fam Krusevac",
      img
    },
    {
      name: "Ostali brendovi",
      img
    }
  ])

  const { name } = props.match.params

  return (
    <Fragment>
      <div className="uk-container uk-margin-top">
        <h3 className="capitalize text-primary uk-text-bold">{name}</h3>
        <table>
          <thead>
            <tr>
              <td className="card-item-padding">Naziv artikla:</td>
              <td className="card-item-padding">Stanje:</td>
              <td className="card-item-padding">Opis:</td>
              <td className="card-item-padding">Dimenzije:</td>
            </tr>
          </thead>
          <tbody>
            {
              items.map(item => (
                <TableCard
                  key={item.name}
                  name={item.name}
                  img={item.img}
                  by={item.by}
                  state={item.state}
                  quantity={item.quantity}
                  desc={item.desc}
                  dimensions={item.dimensions}
                  />
              ))
            }
          </tbody>
        </table>
        <div className="uk-margin-large-top">
          <TitleCard title="Zastupamo" />
        </div>
        <div className="uk-margin-large-top uk-flex uk-flex-wrap">
          {represent.map(item => (
            <RepresentCard
              key={item.name}
              name={item.name}
              img={item.img}
            />
          ))}
        </div>
      </div>
      <LogoStrip />
      <Footer />
    </Fragment>
  );
}

export default Product;
