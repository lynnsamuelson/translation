$(document).ready(function() {


var = Translate function(input) {
  var norwegian {
    happy: "",
    'new': "",
    merry: "",
    christmas: "",
    and: "",
    year: "",

  }

  for (var i = 0; i < phraseArray.length; i++) {
    
  }
}







});






var SolarSystem = (function() {
  var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
  var landed = 0;
  var exploring = [];
  
  return {
    last_modified_date: new Date(),
    getPlanets: function() {
      return planets;
    },
    getLanded: function() {
      return landed;
    },
    setLanded: function(count) {
      if (count < 0 || count > planets.length) {
        throw "I don't think so.  There are only " + planets.length + " planets.";
      } else {
        landed = count;
      }
    },
    getExploring: function() {
      return exploring;
    },
    addExploring: function(spacecraft) {
      exploring.push(spacecraft);
    },
  }
  
})();