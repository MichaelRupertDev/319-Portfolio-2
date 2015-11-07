// ScoreBoard.JS
//
//
//

// 
var ScoreBoard = {

Model : {
	
	// Player 1 Score
	P1Name: undefined,
	// Player 2	Score
	P2Name: undefined,
	// Player 3 Score
	P3Name: undefined,
	
	// Player 1 Score
	P1RoundScore: undefined,
	// Player 2	Score
	P2RoundScore: undefined,
	// Player 3 Score
	P3RoundScore: undefined,
	
	// Player 1 Score
	P1Score: undefined,
	// Player 2	Score
	P2Score: undefined,
	// Player 3 Score
	P3Score: undefined,
	
	
},


View : {
  // first row : Scores
  labelP1S : {id: "labelP1S", type: "label", value: "", onclick:""},
  labelP2S : {id: "labelP2S", type: "label", value: "", onclick:""},
  labelP3S : {id: "labelP3S", type: "label", value: "", onclick:""},
  // second row : Names
  labelP1N : {id: "labelP1N", type: "label", value: "", onclick:""},
  labelP2N : {id: "labelP2N", type: "label", value: "", onclick:""},
  labelP3N : {id: "labelP3N", type: "label", value: "", onclick:""}
},

Controller : {
	
	// that = new name
	// player = name of variable within ScoreBoard.Model
	changeName : function(that, player){
		var name = String(that);
		if(player == 1){
			ScoreBoard.P1RoundScore = 0;
			ScoreBoard.P1Score = 0;
			ScoreBoard.P1Name = name;
		}
		else if(player == 2){
			ScoreBoard.P2RoundScore = 0;
			ScoreBoard.P2Score = 0;
			ScoreBoard.P2Name = name;
		}
		else if(player == 3){
			ScoreBoard.P3RoundScore = 0;
			ScoreBoard.P3Score = 0;
			ScoreBoard.P3Name = name; 
		}
	},
	
	// number = number to be added or subtracted from current variable
	// name = name of variable within ScoreBoard.Model to be edited and set as visible value
	addToRoundScore : function(number, name){
		var val = Number(number);
		if(name == 1){
			ScoreBoard.P1RoundScore += val;
			if(ScoreBoard.P1RoundScore < 0){
				ScoreBoard.P1RoundScore = 0;
			}
			document.getElementById("labelP1S").value = String(ScoreBoard.P1RoundScore);
		}
		else if(name == 2){
			ScoreBoard.P2RoundScore += val;
			if(ScoreBoard.P2RoundScore < 0){
				ScoreBoard.P2RoundScore = 0;
			}
			document.getElementById("labelP2S").value = String(ScoreBoard.P2RoundScore);
		}
		else if(name == 3){
			ScoreBoard.P3RoundScore += val;
			if(ScoreBoard.P3RoundScore < 0){
				ScoreBoard.P3RoundScore = 0;
			}
			document.getElementById("labelP3S").value = String(ScoreBoard.P3RoundScore);
		}
		//document.getElementById(String(element)).value = String(ScoreBoard.Model.name);
	},
	
	endRound : function(){
		ScoreBoard.P1Score += ScoreBoard.P1RoundScore;
		ScoreBoard.P2Score += ScoreBoard.P2RoundScore;
		ScoreBoard.P3Score += ScoreBoard.P3RoundScore;
		ScoreBoard.P1RoundScore = 0;
		ScoreBoard.P2RoundScore = 0;
		ScoreBoard.P3RoundScore = 0;
		document.getElementById("labelP1S").value = String(ScoreBoard.P1Score);
		document.getElementById("labelP2S").value = String(ScoreBoard.P2Score);
		document.getElementById("labelP3S").value = String(ScoreBoard.P3Score);
	},

	// 1 = refresh name labels
	// 2 = refresh score labels to roundScores
	// 3 = refresh score labels to totalScores
	refresh : function(choice){
		if(choice == 1){
			document.getElementById("labelP1N").value = String(ScoreBoard.P1Name);
			document.getElementById("labelP2N").value = String(ScoreBoard.P2Name);
			document.getElementById("labelP3N").value = String(ScoreBoard.P3Name);
		}
		else if (choice == 2){
			document.getElementById("labelP1S").value = String(ScoreBoard.P1RoundScore);
			document.getElementById("labelP2S").value = String(ScoreBoard.P2RoundScore);
			document.getElementById("labelP3S").value = String(ScoreBoard.P3RoundScore);
		}
		else if(choice == 3){
			document.getElementById("labelP1S").value = String(ScoreBoard.P1Score);
			document.getElementById("labelP2S").value = String(ScoreBoard.P2Score);
			document.getElementById("labelP3S").value = String(ScoreBoard.P3Score);
		}
	},
},

run : function() {
  //console.log(ScoreBoard.display());
  return ScoreBoard.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\">"
  s += "<tr><td>";
  s += ScoreBoard.displayElement(ScoreBoard.View.labelP1S);
  s += ScoreBoard.displayElement(ScoreBoard.View.labelP2S);
  s += ScoreBoard.displayElement(ScoreBoard.View.labelP3S);
  s += "</td></tr>";
  s += "<tr><td>";
  s += "</tr></td>";
  s += "<tr><td>";
  s += ScoreBoard.displayElement(ScoreBoard.View.labelP1N);
  s += ScoreBoard.displayElement(ScoreBoard.View.labelP2N);
  s += ScoreBoard.displayElement(ScoreBoard.View.labelP3N);
  s += "</tr></td></table>";
  return s;
},

} // end of ScoreBoard;
