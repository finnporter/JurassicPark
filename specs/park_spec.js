var assert = require("assert");
var Park = require("../park");
var Dinosaur = require("../dinosaur")

describe("Park", function() {

 var park;
 var dinosaur1;

 beforeEach(function() {
  park = new Park();
  dinosaur1 = new Dinosaur("Tyrannosaurus");
});

 it("should start empty", function() {
  assert.strictEqual(park.population.length, 0);
});

 it("should be able to add dinosaurs", function() {
  park.add(dinosaur1);
  assert.strictEqual(park.population.length, 1);
 })


});