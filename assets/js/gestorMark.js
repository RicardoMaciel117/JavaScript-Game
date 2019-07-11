
//	*** Constructor *** --->
//### Componentes >>
var keyboard = {}
var mark = $('#mark');

var markY;
var MARK_X;

const mrkSptX = 52, mrkSptY = 85; 

//	<---



function $mark(){
	//Teclado ->
	if(keyboard[79]){ // *** PODER ***
		console.log("Dio poder");
	}



	//Teclado <-
}

function initMark(){
	markY = limiteSuelo;
	MARK_X = (lienzo.outerWidth()/2)-(mrkSptX/2)-5;
	mark.css({ "left": MARK_X+"px", "top": (markY)+"px" });
}
