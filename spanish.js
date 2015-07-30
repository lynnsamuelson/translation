
var Translate = (function() {
  var norwegian = {
      happy: "feliz",
      'new': "nuevo",
      merry: "alegre",
      christmas: "christmas",
      and: "y",
      year: "year"
   };
 return {
  translatToNorwegian: function(input) {
    console.log("first", input);
    var str = ""; 

      for (var i = 0; i < input.length; i++) {
        if (norwegian[input[i]]) {
          str += norwegian[input[i]];
          console.log("str", str);
        }    
      }
      return str
  }
 }
    
})(); 

var Translation = Translate.translatToNorwegian(["merry", "christmas"])
console.log(Translation);


