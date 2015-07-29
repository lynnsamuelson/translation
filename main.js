$(document).ready(function() {


  $( '#translatebtn').click(function() {
    var phrase = $('#input').val();
    console.log(phrase);
    phraseArray = phrase.split(" ");
    console.log(phraseArray);
    return phraseArray;

  })



});