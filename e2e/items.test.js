const app = require("../index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

let mockItems;

beforeEach(() => {
  mockItems = [
    {
      id: 1,
      title: "NA4900-2RSR-XL",
      radius: "10.000",
      diameter: "22.000",
      b: "14.000",
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
      radius: "10.000",
      diameter: "22.000",
      b: "14.000",
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
      radius: "12.000",
      diameter: "24.000",
      b: "14.000",
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

it("should return a specific item by title, radius, diameter and b", async (done) => {
  const expectedResponse = [mockItems[0]];
  const { title, radius, diameter, b } = mockItems[0];

  const res = await request.get("/items").query({ title, radius, diameter, b });

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

it("should return error message if radius is empty", async (done) => {
  const expectedResponse =
    'Error validating request query. "radius" must be a number.';

  const res = await request.get("/items").query({ radius: "" });

  expect(res.status).toBe(400);
  expect(res.text).toBe(expectedResponse);

  done();
});

it("should return error message if diameter is empty", async (done) => {
  const expectedResponse =
    'Error validating request query. "diameter" must be a number.';

  const res = await request.get("/items").query({ diameter: "" });

  expect(res.status).toBe(400);
  expect(res.text).toBe(expectedResponse);

  done();
});

it("should return error message if b is empty", async (done) => {
  const expectedResponse =
    'Error validating request query. "b" must be a number.';

  const res = await request.get("/items").query({ b: "" });

  expect(res.status).toBe(400);
  expect(res.text).toBe(expectedResponse);

  done();
});
