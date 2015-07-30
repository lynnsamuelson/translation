
var Translate = (function() {
  var norwegian = {
      happy: "lykkelig",
      'new': "ny",
      merry: "lystig",
      christmas: "jul",
      and: "og",
      year: "år"
   };
 return {
  translatToNorwegian: function(input) {
    console.log("first", input);
    var str = ""; 

      for (var i = 0; i < input.length; i++) {
        if (norwegian[input[i]]) {
          str += " " + norwegian[input[i]];
          console.log("translation is: " + str);
        }    
      }
      return str
  }
 }
    
})(); 

var Translation = Translate.translatToNorwegian(["merry", "christmas"])
console.log(Translation);

