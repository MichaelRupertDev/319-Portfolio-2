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
var WOF = function() {
    this.state = "SPIN";
    this.spin_value = 100;
    this.score = 0;
    this.round = 0;
    this.players = [];
    this.phrase = "";
    this.currentPlayer = 1;
  
  this.drawPuzzle = function(phrase){
      var puzzleDiv = $("#puzzle");
      game.phrase = phrase;
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

  this.runRound = function(){
    var result;
    while(game.state != "SOLVED"){
      for(var i = 0; result != "SOLVED" && i < 3; i++){
        this.currentPlayer = i + 1;
        result = game.players[i].doTurn();
      }
    }
    ScoreBoard.Controller.endRound();
    ScoreBoard.Controller.refresh(2);
    game.state = "SPIN";
  }
}
