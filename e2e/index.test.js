const app = require("../index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);

it("should return 'Hello world'", async (done) => {
  const res = await request.get("/");

  expect(res.text).toBe("Hello World!");
  done();
});

it("should return error on non-existent route", async (done) => {
  const res = await request.get("/unknown-route");

  expect(res.status).toBe(404);
  expect(res.text).toContain("Not Found");
  done();
});
