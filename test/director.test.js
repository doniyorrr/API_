const chai = require("chai");
const chaiHttp = require("chai-http");
// const { response } = require("express");
const should = chai.should();
const server = require("../app");

chai.use(chaiHttp);

describe("Bosh sahifani auth testdan otqazish", () => {
  before((done) => {
    chai
      .request(server)
      .post("/authenticate")
      .send({ username: "Nodemon", password: "123456" })
      .end(async(err, res) => {
        token = await res.body.token;
        console.log(token);
        done();
      });
  });

  describe("/get orqali api/movies", () => {
    it("Get orqali", (done) => {
      chai
        .request(server)
        .get("/api/movies")
        .set("x-access-token", token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          done();
        });
    });
  });

  describe("Post movies", () => {
    it("post orqali kinoni qoshish", (done) => {
      const movies = {
        title: "test",
        category: "succesfull",
        country: "usa",
        year: 2005,
      };
      chai
        .request(server)
        .post("/api/movies")
        .send(movies)
        .set("x-access-token", token)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("title");
          res.body.should.have.property("category");
          res.body.should.have.property("country");
          done();
        });
    });
  });
});
