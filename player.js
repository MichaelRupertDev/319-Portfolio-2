Player = function(name) {
	this.name = name;
	this.score = 0;
	this.spin_value = 100;

	this.doTurn = function(){
		if(game.state == "SPIN") {
			spinWheel();
			this.doTurn();
		}
		if(game.state == "CHOOSE") {
			var letter = prompt("Choose a letter: ");
			this.selectLetter(letter);
		}
		if(game.state == "ENDTURN") {
			game.state = "SPIN";
			return "ENDTURN";
		}
		if(game.state == "SOLVED"){
			return "SOLVED";
		}
	}

	this.solve = function() {
		var answer = prompt("Would you like to solve? Type answer or N for no.");
		if(answer.toLowerCase() == "n"){
			return;
		}
		if(answer.toLowerCase() == game.phrase){
			game.state = "SOLVED";
		}
		else {
			game.state = "ENDTURN";
		}
	}

	this.selectLetter = function(letter) {
    var matches = $("[id=" + letter.toLowerCase() + "]");
    matches.css("color", "black");
    if(matches.length != 0){
        ScoreBoard.Controller.addToRoundScore(matches.length * this.spin_value, game.currentPlayer);
        matches.attr('id', 'chosen');
        game.state = "SPIN";
        this.solve();
        ScoreBoard.Controller.refresh(2);
        this.doTurn();
    }
    else{
    	game.state = "ENDTURN";
    	this.doTurn();
    }
  }

}
