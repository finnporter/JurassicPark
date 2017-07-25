var assert = require("assert");
var Park = require("../park");
var Dinosaur = require("../dinosaur")

describe("Park", function() {

 var park;
 var dinosaur1;
 var dinosaur1;

 beforeEach(function() {
  park = new Park();
  dinosaur1 = new Dinosaur("Tyrannosaurus", 3);
  dinosaur2 = new Dinosaur("Ceratops", 1);
});

 it("should start empty", function() {
  assert.strictEqual(park.population.length, 0);
});

 it("should be able to add dinosaurs", function() {
  park.add(dinosaur1);
  assert.strictEqual(park.population.length, 1);
});

 it("should be able to remove a dinosaur by type", function() {
  park.add(dinosaur1);
  park.add(dinosaur2);
  park.remove("Ceratops")
  assert.strictEqual(park.population.length, 1);
});

 it("should be able to remove dino with more than 2 offspring", function() {
   park.add(dinosaur1);
   park.add(dinosaur2);
   assert.strictEqual(park.findDinosaurWithHighAnnualOffspring(2).length, 1);
 })


});