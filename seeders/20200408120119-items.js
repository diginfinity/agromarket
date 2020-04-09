"use strict";

const up = (queryInterface, Sequelize) => {
  const itemsSeed = [
    {
      id: 1,
      title: "NA4900-2RSR-XL",
      innerDiameter: 10.0,
      outerDiameter: 22.0,
      width: 14.0,
      createdAt: "2020-04-09T07:45:07.000Z",
      updatedAt: "2020-04-09T07:45:07.000Z",
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/NA49..-2RSR*NA4900-2RSR-XL?pattern=NA4900-2RSR-XL",
    },
    {
      id: 2,
      title: "NA4900-RSR-XL",
      innerDiameter: 10.0,
      outerDiameter: 22.0,
      width: 14.0,
      createdAt: "2020-04-09T07:45:07.000Z",
      updatedAt: "2020-04-09T07:45:07.000Z",
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/NA49..-RSR*NA4900-RSR-XL?pattern=NA4900-RSR-XL",
    },
    {
      id: 3,
      title: "NA4901-2RSR-XL",
      innerDiameter: 12.0,
      outerDiameter: 24.0,
      width: 14.0,
      createdAt: "2020-04-09T07:45:07.000Z",
      updatedAt: "2020-04-09T07:45:07.000Z",
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/NA49..-2RSR*NA4901-2RSR-XL?pattern=NA4901-2RSR-XL",
    },
  ];
  return queryInterface.bulkInsert("items", itemsSeed);
};

const down = (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete("items", null, {});
};

module.exports = {
  up,
  down,
};
