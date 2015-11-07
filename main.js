$(document).ready(function(){
	/**
		Wheel Logic
	*/
	var current_angle = 0;
	var desired_angle = 0;
	var values = ["Bankrupt", "$500", "$175", "$300", "$200", "$75", "$125", "$100", "$25", "$200" 
					, "Free Spin", "$100", "$200", "$50", "$450", "Lose A Turn", "$100", "$275", "$75", "$150"
					, "Buy A Vowel", "$100", "$250", "$50"];
	// spins the wheel
    spinWheel = function(){
		desired_angle = Math.floor((Math.random() * 900) + 1);
		while(Math.abs(desired_angle - current_angle) < 360){
			desired_angle = Math.floor((Math.random() * 1800) + 1);
		}
		
		$("#wheel").rotate(desired_angle);
		current_angle = desired_angle;
		var adjusted = current_angle;
		while(adjusted > 360){
			adjusted = adjusted % 360;
		}
		//var adj = Math.ceil((360 - adjusted)/ 360 * 24);
		var adj = (360 - adjusted)/ 360 * 24;
		var rem = adj;
		while(rem > 1){
			rem --
		};
		if(rem > 0.5){
			adj = Math.ceil(adj);
		}
		else{
			adj = Math.floor(adj);
		}
		if(values[adj] == "Bankrupt") game.state == "ENDTURN";
		else game.state = "CHOOSE";
    };
	
	// helper function for rotate 
	jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
	
	/**  End of Wheel Logic */

	};
	var name = prompt("Please enter your name");
	player1 = new Player(name);
	game = new WOF();
	game.players = [player1, new Player('Player 2'), new Player('Player 3')];
	ScoreBoard.Controller.changeName(player1.name, 1);
	ScoreBoard.Controller.changeName(player1.name, 2);
	ScoreBoard.Controller.changeName(player1.name, 3);
	ScoreBoard.Controller.refresh(1);
	game.drawPuzzle("this is a test");
	var i = 0;
	while(game.round < 30){
		game.players[i].doTurn();
		if(i == 2){
			i = 0;
			game.round++;
		}
		else i++;
	}
});
