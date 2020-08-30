const request = require("supertest");
const app = require("../app");

describe("POST /text", function () {
  it("responds with json", function (done) {
    request(app)
      .post("/text")
      .send({ message: "message" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, {
        message: "message",
      })
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
