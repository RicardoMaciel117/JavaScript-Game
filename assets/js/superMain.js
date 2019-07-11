
//	*** Constructor *** --->
var lienzo = $('#lienzo');
var juegoListo = false;


//	<---

$(document).ready(function(){//Bucle principal
	buclePrincipal.iterar(0);
	teclado.iniciar();
	initCanvi();
	initMark();
	juegoListo = true;
	//addKeyBoardevents();
});


function hiloPrincipal(){
	if(juegoListo){
		$mark();
	}
}