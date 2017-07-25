var assert = require("assert");
var Dinosaur = require("../dinosaur");

describe("Dinosaur", function() {
  
  var dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur("Pterosauria", 1);
  });
  
  it("dinosaur should have a name", function() {
    assert.strictEqual(dinosaur.type, "Pterosauria")
  });

});