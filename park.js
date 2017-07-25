var Park = function() {
  this.population = [];
};

Park.prototype.add = function(dinosaur) {
  this.population.push(dinosaur);
};

Park.prototype.remove = function(dinosaurType) {
  var dinoToRemove = this.population.indexOf(dinosaurType);
    this.population.splice(dinoToRemove, 1);
};

module.exports = Park;