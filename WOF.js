//
// Wheel Of Fortune
//
//	MVC
//
//	Portfolio 2
//
//	Group 11
//	Kellen Johnson	/ Michael Rupert
//
var WOF = function(in_name) {

    this.name = in_name;
    this.state = "spinning";
    this.spin_value = 100;
    this.score = 0;
  
  this.drawPuzzle = function(phrase){
      var puzzleDiv = $("#puzzle");
      puzzleDiv.empty();
      var words = phrase.split(' ');
      for(var i = 0; i < words.length; i++){
        puzzleDiv.append("<div id=\"row"+ i+"\" class=\"row\">");
        var letters = words[i].split('');
        for(var j = 0; j < letters.length; j++){
          $("#row" + i).append("<div class=\"letter col-md-1\" id=\""+ letters[j] +"\">" + letters[j] + "</div>");
        }
      }
  }

  this.selectLetter = function(letter) {
    var matches = $("[id=" + letter.toLowerCase() + "]");
    matches.css("color", "black");
    if(matches.length != 0){
        game.score += matches.length * game.spin_value;
        matches.attr('id', 'chosen');
        game.state = "SPIN";
    }
  }
}
