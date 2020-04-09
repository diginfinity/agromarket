const app = require("../index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

let mockItems;

beforeEach(() => {
  mockItems = [
    {
      id: 1,
      title: "NA4900-2RSR-XL",
      innerDiameter: "10.000",
      outerDiameter: "22.000",
      width: "14.000",
      image: null,
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/NA49..-2RSR*NA4900-2RSR-XL?pattern=NA4900-2RSR-XL",
      deletedAt: null,
      createdAt: "2020-04-09T07:45:07.000Z",
      updatedAt: "2020-04-09T07:45:07.000Z",
    },
    {
      id: 2,
      title: "NA4900-RSR-XL",
      innerDiameter: "10.000",
      outerDiameter: "22.000",
      width: "14.000",
      image: null,
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/NA49..-RSR*NA4900-RSR-XL?pattern=NA4900-RSR-XL",
      deletedAt: null,
      createdAt: "2020-04-09T07:45:07.000Z",
      updatedAt: "2020-04-09T07:45:07.000Z",
    },
    {
      id: 3,
      title: "NA4901-2RSR-XL",
      innerDiameter: "12.000",
      outerDiameter: "24.000",
      width: "14.000",
      image: null,
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/NA49..-2RSR*NA4901-2RSR-XL?pattern=NA4901-2RSR-XL",
      deletedAt: null,
      createdAt: "2020-04-09T07:45:07.000Z",
      updatedAt: "2020-04-09T07:45:07.000Z",
    },
  ];
});

it("should return a list of items", async (done) => {
  const res = await request.get("/items");

  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual(mockItems);
  done();
});

it("should return a specific item by title, innerDiameter, outerDiameter and width", async (done) => {
  const expectedResponse = [mockItems[0]];
  const { title, innerDiameter, outerDiameter, width } = mockItems[0];

  const res = await request
    .get("/items")
    .query({ title, innerDiameter, outerDiameter, width });

  expect(res.status).toBe(200);
  expect(res.header);

  expect(res.body).toStrictEqual(expectedResponse);
  done();
});

it("should return error message if title is empty", async (done) => {
  const expectedResponse =
    'Error validating request query. "title" is not allowed to be empty.';

  const res = await request.get("/items").query({ title: "" });

  expect(res.status).toBe(400);
  expect(res.text).toBe(expectedResponse);

  done();
});

it("should return error message if innerDiameter is empty", async (done) => {
  const expectedResponse =
    'Error validating request query. "innerDiameter" must be a number.';

  const res = await request.get("/items").query({ innerDiameter: "" });

  expect(res.status).toBe(400);
  expect(res.text).toBe(expectedResponse);

  done();
});

it("should return error message if outerDiameter is empty", async (done) => {
  const expectedResponse =
    'Error validating request query. "outerDiameter" must be a number.';

  const res = await request.get("/items").query({ outerDiameter: "" });

  expect(res.status).toBe(400);
  expect(res.text).toBe(expectedResponse);

  done();
});

it("should return error message if width is empty", async (done) => {
  const expectedResponse =
    'Error validating request query. "width" must be a number.';

  const res = await request.get("/items").query({ width: "" });

  expect(res.status).toBe(400);
  expect(res.text).toBe(expectedResponse);

  done();
});
