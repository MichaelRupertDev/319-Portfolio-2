Player = function(name) {
	this.name = name;
	this.score = 0;
    this.buyAVowel = false;

	this.doTurn = function(){
		if(game.state == "SPIN") {
			this.solve();
			if(game.state != "SOLVED"){
				spinWheel();
				this.doTurn();
			}
		}
		if(game.state == "CHOOSE") {
			switch(game.spin_value){
				case "Bankrupt":
					ScoreBoard.Controller.clearScore(game.currentPlayer);
					game.state = "SPIN";
					return "ENDTURN";
					break;
				case "Lose A Turn":
					game.state = "SPIN";
					return "ENDTURN";
					break;
				case "Buy A Vowel":
					this.buyAVowel = true;
					var letter = prompt("Player" + game.currentPlayer + ", Choose a vowel: ");
					break;
				case "Free Spin":
					spinWheel();
					break;
				default:
					if(game.state != "SOLVED") var letter = prompt("Player" + game.currentPlayer + ", Choose a consonant: ");
					break;
			}
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
		var answer = prompt("Player " + game.currentPlayer + ", Would you like to solve? Type answer or N for no.");
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
		if(game.state == "SOLVED"){
			this.doTurn();
			return;
		}
		var vowels = "aeiou";
	    var matches = $("[id=" + letter.toLowerCase() + "]");
	   	if(this.buyAVowel && vowels.indexOf(letter.toLowerCase()) == -1){
	    	game.state = "ENDTURN"
	    	this.buyAVowel = false;
	    	this.doTurn();
	    	return;
	    }
	    else if(!this.buyAVowel && vowels.indexOf(letter.toLowerCase()) != -1){
	    	game.state = "ENDTURN"
	    	this.doTurn();
	    	return;
	    }
	   	matches.css("color", "black");
	    if(matches.length != 0 && !this.buyAVowel){
	        ScoreBoard.Controller.addToRoundScore(matches.length * game.spin_value, game.currentPlayer);
	        matches.attr('id', 'chosen');
	        game.state = "SPIN";
	        ScoreBoard.Controller.refresh(2);
	        this.doTurn();
	    }
	    else{
	    	game.state = "ENDTURN";
	    	this.doTurn();
	    }
    }

}
