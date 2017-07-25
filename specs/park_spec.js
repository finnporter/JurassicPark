var assert = require("assert");
var Park = require("../park");

describe("Park", function() {

 var park;

 beforeEach(function() {
  park = new Park();
});

 it("should start empty", function() {
  assert.strictEqual(park.population.length, 0);
});

 // it("should be able to add dinosaurs", function() {
 //  park.add("Ceratops")
 // })


});