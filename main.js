$(document).ready(function() {

var phraseArray = [];
  
    $( '#translatebtn').click(function() {
      var phrase = $('#input').val();
      console.log(phrase);
      phraseArray = (phrase.split(" "));
      console.log(phraseArray);
      return phraseArray;
      $('translationOutput').append(Translation);

    })
  



});

