$(document).ready(function(){
	/**
		Wheel Logic
	*/
	var current_angle = 0;
	var desired_angle = 0;
	var values = ["Bankrupt", "500", "175", "300", "200", "75", "125", "100", "25", "200" 
					, "Free Spin", "100", "200", "50", "450", "Lose A Turn", "100", "275", "75", "150"
					, "Buy A Vowel", "100", "250", "50"];
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
		
		if(isNaN(parseInt(values[adj]))){
			game.spin_value = values[adj];
		}
		else{
			game.spin_value = parseInt(values[adj]);
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
	var name = prompt("Player 1, Please enter your name");
	player1 = new Player(name);
	name = prompt("Player 2, Please enter your name");
	player2 = new Player(name);
	name = prompt("Player 3, Please enter your name");
	player3 = new Player(name);
	game = new WOF();
	game.players = [player1, player2, player3];
	ScoreBoard.Controller.changeName(player1.name, 1);
	ScoreBoard.Controller.changeName(player2.name, 2);
	ScoreBoard.Controller.changeName(player3.name, 3);
	ScoreBoard.Controller.refresh(1);
	var Phrases = ["Activity Book", "Air Purifier", "Algebra Book", "Artificial Intelligence", "Baby Talk", "Bargains And Freebies", "Barbells", "Bandages", "Banjo Music", "Balsa Wood", "Butterfly Kisses", "Bumper Sticker", "Bubble Wrap", "Broken Promises", "Bright Future", "Pokemon Master", "Crash Test Dummy", "Crazy Scheme", "Feather Boa", "Fax Modem", "Favorite Sleeping Position", "Faux Fur Coat", "Global Enconomy", "Glass Bottle", "Gift Tag"];
	var Randoms = [0, 0, 0];
	for(var j = 1; j <= 3; j ++){
		Randoms[j] = Math.floor((Math.random() * 25) + 1);
	}
	for(game.round = 1; game.round <= 3; game.round++){
		game.drawPuzzle(Phrases[Randoms[game.round]].toLowerCase());
		game.runRound();
	}
	ScoreBoard.Controller.refresh(3);
	alert("Congratulations Winner\n" + ScoreBoard.Controller.congrats());
});
