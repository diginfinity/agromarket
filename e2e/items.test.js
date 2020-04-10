const app = require("../index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

let mockItems;

beforeEach(() => {
  mockItems = [
    {
      id: 1,
      title: "AXK0414-TV/0-10",
      innerDiameter: 4.0,
      outerDiameter: 14.0,
      width: 2.0,
      image: "",
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/AXK*AXK0414-TV?pattern=AXK0414-TV",
      categoryId: 1,
      deletedAt: null,
      createdAt: "2020-04-10T08:54:35.394Z",
      updatedAt: "2020-04-10T08:54:35.394Z",
    },
    {
      id: 2,
      title: "AXK0515-TV/0-10",
      innerDiameter: 5.0,
      outerDiameter: 15.0,
      width: 2.0,
      image: "",
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/AXK*AXK0515-TV?pattern=AXK0515-TV",
      categoryId: 1,
      deletedAt: null,
      createdAt: "2020-04-10T08:54:35.394Z",
      updatedAt: "2020-04-10T08:54:35.394Z",
    },
    {
      id: 3,
      title: "AXK0619-TV/0-10",
      innerDiameter: 6.0,
      outerDiameter: 19.0,
      width: 2.0,
      image: "",
      link:
        "https://medias.schaeffler.com/medias/en!hp.ec.br.pr/AXK*AXK0619-TV?pattern=AXK0619-TV",
      categoryId: 1,
      deletedAt: null,
      createdAt: "2020-04-10T08:54:35.394Z",
      updatedAt: "2020-04-10T08:54:35.394Z",
    },
  ];
});

it("should return a list of items", async (done) => {
  const res = await request.get("/items");

  expect(res.status).toBe(200);
  expect(res.body.length).toBeGreaterThan(1);
  done();
});

it("should return a specific item by title, innerDiameter, outerDiameter and width", async (done) => {
  const expectedResponse = [{ id: mockItems[0].id }];
  const { title, innerDiameter, outerDiameter, width } = mockItems[0];

  const res = await request
    .get("/items")
    .query({ title, innerDiameter, outerDiameter, width });

  expect(res.status).toBe(200);
  expect(res.header);

  expect(res.body.length).toBe(1);

  expect(res.body[0].id).toBe(expectedResponse[0].id);
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
