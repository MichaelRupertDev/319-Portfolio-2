// CALCULATOR.JS
//
//
//

// 
var Keyboard = {

Model : {
	// The value stored in memory
	ActiveLetter : undefined,
	
},


View : {
  label : {id: "label", type: "label", value: "", onclick:""},
  // first row of buttons (Q to +)
  buttonQ : {id: "buttonQ", type: "button", value: "Q", onclick:""},
  buttonW : {id: "buttonW", type: "button", value: "W", onclick:""},
  buttonE : {id: "buttonE", type: "button", value: "E", onclick:""},
  buttonR : {id: "buttonR", type: "button", value: "R", onclick:""},
  buttonT : {id: "buttonQ", type: "button", value: "T", onclick:""},
  buttonY : {id: "buttonW", type: "button", value: "Y", onclick:""},
  buttonU : {id: "buttonE", type: "button", value: "U", onclick:""},
  // second row
  buttonI : {id: "buttonR", type: "button", value: "I", onclick:""},
  buttonO : {id: "buttonQ", type: "button", value: "O", onclick:""},
  buttonP : {id: "buttonW", type: "button", value: "P", onclick:""},
  buttonA : {id: "buttonE", type: "button", value: "A", onclick:""},
  buttonS : {id: "buttonR", type: "button", value: "S", onclick:""},
  buttonD : {id: "buttonQ", type: "button", value: "D", onclick:""},
  buttonF : {id: "buttonW", type: "button", value: "F", onclick:""},
  // third row
  buttonG : {id: "buttonE", type: "button", value: "G", onclick:""},
  buttonH : {id: "buttonR", type: "button", value: "H", onclick:""},
  buttonJ : {id: "buttonQ", type: "button", value: "J", onclick:""},
  buttonK : {id: "buttonW", type: "button", value: "K", onclick:""},
  buttonL : {id: "buttonE", type: "button", value: "L", onclick:""},
  buttonZ : {id: "buttonR", type: "button", value: "Z", onclick:""},
  buttonX : {id: "buttonQ", type: "button", value: "X", onclick:""},
  // fourth row 
  buttonC : {id: "buttonW", type: "button", value: "C", onclick:""},
  buttonV : {id: "buttonE", type: "button", value: "V", onclick:""},
  buttonB : {id: "buttonR", type: "button", value: "B", onclick:""},
  buttonN : {id: "buttonQ", type: "button", value: "N", onclick:""},
  buttonM : {id: "buttonW", type: "button", value: "M", onclick:""}
},

Controller : {
	// The handler for buttons 1 - 9
	AToZHandler : function(that){
	document.getElementById("label").value = String(that.value);
	Keyboard.ActiveLetter = String(document.getElementById("label").value);
}

},

run : function() {
  //Keyboard.attachHandlers();
  Keyboard.attachAToZHandlers();
  return Keyboard.display();
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
  s += "<tr><td>" + Keyboard.displayElement(Keyboard.View.label) + "</td></tr>";
  s += "<tr><td>";
  s += Keyboard.displayElement(Keyboard.View.buttonQ);
  s += Keyboard.displayElement(Keyboard.View.buttonW);
  s += Keyboard.displayElement(Keyboard.View.buttonE);
  s += Keyboard.displayElement(Keyboard.View.buttonR);
  s += Keyboard.displayElement(Keyboard.View.buttonT);
  s += Keyboard.displayElement(Keyboard.View.buttonY);
  s += Keyboard.displayElement(Keyboard.View.buttonU);
  s += "</td></tr>";
  s += "<tr><td>";
  s += Keyboard.displayElement(Keyboard.View.buttonI);
  s += Keyboard.displayElement(Keyboard.View.buttonO);
  s += Keyboard.displayElement(Keyboard.View.buttonP);
  s += Keyboard.displayElement(Keyboard.View.buttonA);
  s += Keyboard.displayElement(Keyboard.View.buttonS);
  s += Keyboard.displayElement(Keyboard.View.buttonD);
  s += Keyboard.displayElement(Keyboard.View.buttonF);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Keyboard.displayElement(Keyboard.View.buttonG);
  s += Keyboard.displayElement(Keyboard.View.buttonH);
  s += Keyboard.displayElement(Keyboard.View.buttonJ);
  s += Keyboard.displayElement(Keyboard.View.buttonK);
  s += Keyboard.displayElement(Keyboard.View.buttonL);
  s += Keyboard.displayElement(Keyboard.View.buttonZ);
  s += Keyboard.displayElement(Keyboard.View.buttonX);
  s += "</tr></td>";
  s += "<tr><td>";
  s += Keyboard.displayElement(Keyboard.View.buttonC);
  s += Keyboard.displayElement(Keyboard.View.buttonV);
  s += Keyboard.displayElement(Keyboard.View.buttonB);
  s += Keyboard.displayElement(Keyboard.View.buttonN);
  s += Keyboard.displayElement(Keyboard.View.buttonM);
  s += "</tr></td></table>";
  return s;
},

// attaches handlers for the buttons A - Z
attachAToZHandlers : function() {
   for (var i = 65; i <= 90; i++) {
	 Keyboard.View["button" + String.fromCharCode(i)].onclick ="Keyboard.Controller.AToZHandler(this); game.selectLetter('"+String.fromCharCode(i)+"')";
   }
},

} // end of Keyboard;
