Player = function(name) {
	this.name = name;
	this.score = 0;
	this.spin_value = 100;

	this.doTurn = function(){
		if(game.state == "SPIN") {
			spinWheel();
			this.doTurn(game.state);
		}
		if(game.state == "CHOOSE") {
			var letter = prompt("Choose a letter: ");
			this.selectLetter(letter);
		}
		if(game.state == "ENDTURN") {
			return;
		}
		if(game.state == "SOLVED"){
			alert("SOLVED");
		}
	}

	this.solve = function() {
		var answer = prompt("Would you like to solve? Type answer or N for no.");
		if(answer.toLowerCase() == "n"){
			return;
		}
		if(answer.toLowerCase() == game.phrase){
			game.state == "SOLVED";
		}
	}

	this.selectLetter = function(letter) {
    var matches = $("[id=" + letter.toLowerCase() + "]");
    matches.css("color", "black");
    if(matches.length != 0){
        ScoreBoard.Controller.addToRoundScore(matches.length * this.spin_value, 1);
        matches.attr('id', 'chosen');
        this.solve();
        game.state = "SPIN";
        this.doTurn(game.state);
    }
    else{
    	game.state = "ENDTURN";
    	this.doTurn(game.state);
    }
  }

}
