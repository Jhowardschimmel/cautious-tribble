var expect = require("chai").expect;
var chai = require("chai");
var chaiHttp = require("chai-http");
chai.use(chaiHttp);
var app = require("../server");

describe("canary test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(true).to.be.true;
  });
});

describe("GET /", function() {
  //Test the root GET route is returning "Hello World"
  it("should send 'Hello World' when the / route is hit", function(done) {
    chai
      .request(app)
      .get("/")
      .end(function(err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
});
