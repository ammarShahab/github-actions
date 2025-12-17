// 12. created a test folder
const request = require("supertest");
const app = require("../index");
const { expect } = require("chai");

describe("GET /", () => {
  it("response with  text 'Hello World!'", async () => {
    await request(app)
      .get("/")
      .expect(200)
      .then((res) => expect(res.text).to.equal("Hello World!"));
  });
});
