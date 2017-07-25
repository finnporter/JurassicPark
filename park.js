var Park = function() {
  this.population = [];
};

Park.prototype.add = function(dinosaur) {
  this.population.push(dinosaur);
};

module.exports = Park;