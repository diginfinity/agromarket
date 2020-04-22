import React, { useState, Fragment } from 'react';
import fag from '../../assets/catalogues/fag.svg';
import Footer from '../layout/pagepart/Footer';

function CatalogueCardSingle({ match }) {
  const [x, setX] = useState({ name: "FAG", img: fag })

  return (
    <Fragment>
      <div className="uk-container">
        <div style={{ width: "80vw", height: "100vh" }} className="uk-flex uk-flex-middle uk-flex-around">
          <img src={x.img} alt={x.name} />
          <div style={{ marginLeft: "5rem" }}>
            <h1 className="uk-text-center text-primary">{x.name}</h1>
            <p className="uk-text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores eius pariatur praesentium ab eligendi nostrum error, atque, minus voluptatibus perspiciatis sint rem. Ex eveniet dolores reiciendis, error quos delectus dolorum, temporibus veniam? Enim amet earum atque et excepturi, odit, quis fugiat qui dolores aliquam asperiores libero illo voluptas odio quasi consectetur quam recusandae adipisci expedita ad! Ex perferendis voluptates fugit repudiandae doloremque reprehenderit eum molestias blanditiis suscipit cum quis laborum deserunt amet, magnam animi voluptatem, repellat similique natus. Neque ut molestiae, reiciendis, voluptas animi in esse similique unde repellendus voluptatem.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default CatalogueCardSingle;
