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

function drawPuzzle(phrase){
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

