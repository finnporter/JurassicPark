var assert = require("assert");
var Dinosaur = require("../dinosaur");

describe("Dinosaur", function() {
  
  var dinosaur;

  beforeEach(function() {
    dinosaur = new Dinosaur("Pterosauria", 1);
  });
  
  it("dinosaur should have a name", function() {
    assert.strictEqual(dinosaur.type, "Pterosauria");
  });

  it("dinosaur should have annual Offspring", function() {
    assert.strictEqual(dinosaur.annualOffspring, 1);
  });

});