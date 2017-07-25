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

Park.prototype.findDinosaurWithHighAnnualOffspring = function(maxamount) {
  var result = [];
  for (dino of this.population) {
    if (dino.annualOffspring > maxamount) {
      result.push(dino);
    }
    return result;
  }

};

module.exports = Park;