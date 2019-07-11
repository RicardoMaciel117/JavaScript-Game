
var keyboard = {};
var markX = 0;
var markY = 0;
var saltando = false;
var limiteSalto = 40;
var ascenso = false;
var energiaSalto = 3;
var mark = $("#mark");
var enMovimiento = false;
var aLaDerecha = true;
var poder = 0;
var gravedad = 0;
var enPiso = true;
var balas = [];
var disparando = false;
var limiteSuelo;

var audio = new Audio('audio/bala.mp3');


var cubyX = 100, cubyY = 100;


var enemigos = [
	{ "rect2" : {} }, { "rect2" : {}}, { "rect2" : {} }, { "rect2" : {} }
];


var rectMark = {x: 5, y: 5, width: 50, height: 50}
//var rect2 = {}


var leDIo = false;


$(document).ready(function(){//Bucle principal
	teclado.iniciar();
	buclePrincipal.iterar(0);
	initCanvi();
	addKeyBoardevents();
});

//if(keyboard[37])
	//{

function markMovement(){

	animarMark();
	if(keyboard[79]){ // *** PODER ***
		poder = 3;
	}
	else{
		poder = 0;
	}

	if(keyboard[38]){ // *** ARRIBA ***
		cubyY--;
		colisionesMark({"x" : cubyX, "y": cubyY, "width": 25, "height": 25} ); 
		$("#cuby").css({"top" : cubyY+"px"});
	}
	if(keyboard[40]){ // *** ABAJO ***
		cubyY++;
		colisionesMark({"x" : cubyX, "y": cubyY, "width": 25, "height": 25} ); 
		$("#cuby").css({"top" : cubyY+"px"});
	}

	if(keyboard[37]){ // *** IZQUIERDA ***
		cubyX--;
		colisionesMark({"x" : cubyX, "y": cubyY, "width": 25, "height": 25} ); 
		$("#cuby").css({"left" : cubyX+"px"});
	}
	if(keyboard[39]){ // *** DERECHA ***
		cubyX++;
		colisionesMark({"x" : cubyX, "y": cubyY, "width": 25, "height": 25} ); 
		$("#cuby").css({"left" : cubyX+"px"});
	}


	

	if(keyboard[73]){ // *** SALTO ***
		//mark.css({ "left": (markX-=5)+"px" });
		if(!saltando && enPiso){
			indPlataforma = -1;
			enPiso = false;
			saltando = true;
			ascenso = true;
		}	
	}

	if(keyboard[85])/*** DISPARO ***/ { 
		if(!disparando){
			audio.play();
			const id = balas.length+"_"+Math.round(markY);
			$("#lienzo").append("<span id='"+id+"' class='bala' style='top: "+(markY+30)+"px;'></span>");
			const bala = {"id": id, x: markX+25, y: markY+30, derecha: aLaDerecha }
			balas.push(bala);
			disparando = true;
		}
	}
	else{
		disparando = false;
	}

	if(keyboard[65]){ // *** TECLA IZQUIERDA ***
		if(aLaDerecha){
			aLaDerecha = false;
			mark.css({ "background-image": 'url("imgs/markLeft.gif")' });
		}

		if(!enMovimiento){
			mark.css({ "background-image": 'url("imgs/markLeft.gif")' });
			enMovimiento = true;
		}
		markX-=(3+poder);
	}
	else if(keyboard[68]){ // *** TECLA DERECHA ***
		//mark.css({ "left": (markX+=5)+"px" });
		if(!aLaDerecha){
			aLaDerecha = true;
			mark.css({ "background-image": 'url("imgs/markRight.gif")' });
		}
		if(!enMovimiento){
			mark.css({ "background-image": 'url("imgs/markRight.gif")' });
			enMovimiento = true;
		}
		
		markX+=(3+poder);
	}
	else{
		if(enMovimiento){
			enMovimiento = false;
			if(aLaDerecha){
				mark.css({ "background-image": 'url("imgs/markRight.gif")' });
			}
			else{
				mark.css({ "background-image": 'url("imgs/markLeft.gif")' });
			}
			
		}
		
	}
	animarMark();
	
}

function animarMark(){
	mark.css({ "left": (markX)+"px", "top": (markY)+"px" });

	rectMark["x"] = markX;
	rectMark["y"] = markY;
	//mark.css({  });


	if(saltando){
		salto();
	}

	//colisionesMark(rectMark);

	if(!enPiso && !saltando){
		efectoGravedad();
	}

	if(balas.length > 0){
		disparos();
	}

	//moverEnemigos();
}

function initCanvi(){
	var lienzo = $('#lienzo');
	lienzo.css({
    	left: ($(window).width() - lienzo.outerWidth())/2,
    	top: $(window).scrollTop()+($(window).height()/2) - lienzo.outerHeight()/2 
	});
	//markX = ;


	limiteSuelo = lienzo.outerHeight()-91;

	


	lienzo.append("<div id='enemy0' class='enemy' style='width: 200px; height: 20px; border: solid;  top: "+(limiteSuelo-90)+"px; left: "+(lienzo.outerWidth()-450)+"px; background: white; position: absolute;'></div>")
	enemigos[0]["rect2"] = {x: lienzo.outerWidth()-450, y: limiteSuelo-90, width: 200, height: 20};
	


	lienzo.append("<div id='enemy1' class='enemy' style='width: 200px; height: 20px; border: solid;  top: "+(limiteSuelo-150)+"px; left: "+(lienzo.outerWidth()-590)+"px; background: white; position: absolute;'></div>")
	enemigos[1]["rect2"] = {x: lienzo.outerWidth()-590, y: limiteSuelo-150, width: 200, height: 20};

	

	enemigos[2]["rect2"] = {x: lienzo.outerWidth()-200, y: limiteSuelo-220, width: 220, height: 20};
	lienzo.append("<div id='enemy2' class='enemy' style='width: 220px; height: 20px; border: solid;  top: "+(limiteSuelo-220)+"px; left: "+(lienzo.outerWidth()-200)+"px; background: white; position: absolute;'></div>")



	enemigos[3]["rect2"] = {x: lienzo.outerWidth()-250, y: limiteSuelo-30, width: 120, height: 20};
	lienzo.append("<div id='enemy3' class='enemy' style='width: 120px; height: 20px; border: solid;  top: "+(limiteSuelo-20)+"px; left: "+(lienzo.outerWidth()-250)+"px; background: white; position: absolute;'></div>")


	//--------------------------
	lienzo.append("<div id='cuby' class='enemy' style='width: 25px; color: blueviolet; height: 25px; border: solid;  top: "+(cubyY)+"px; left: "+cubyX+"px; background: white; position: absolute;'></div>")


	markY = limiteSuelo;

	rectMark  = {x: markX, y: markY, width: 52, height: 85}
	
}

function disparos(){

	for(i = 0; i < balas.length; i++){

		if(balas[i]["derecha"]){
			balas[i].x += 35;
			$("#"+balas[i]["id"]).css({ "left": balas[i]["x"]+"px", "visibility": "visible" });
		}
		else{
			balas[i].x -= 35;
			$("#"+balas[i]["id"]).css({ "left": balas[i]["x"]+"px", "visibility": "visible" });
		}
		
		
		if(balas[i]["x"] > $("#lienzo").width() || balas[i]["x"] < 0){
			$("#"+balas[i]["id"]).remove();
			balas.splice(i,1);
			return;
		}
		colisionesEnemigo({x: balas[i].x, y: balas[i].y });

	}

	//$("#0_438").css({ "left": markX+"px", "border": "solid" });
	/*
	for(i = 0; i < balas.length; i++){
		if(balas[i].x < 600){
			balas[i].x++;
			const b = balas[i].x;
			console.log(balas[i]);//#0_438.25 0_438.25
			$("#0_438").css({ "left": i+"px", "border": "solid" });
		}
		else{
			balas.splice(i, 1);
		}
	}*/
}

function salto(){
	if(ascenso){
		energiaSalto -= 0.08;
		if(energiaSalto <= 0){
			saltando = false;
			energiaSalto = 3;
			gravedad = 0;
			return;
		}

		/*
		if(energiaSalto<= -3){
			energiaSalto = 3;
			saltando = false;
			return;
		}
		*/
	}
	markY -= energiaSalto+(poder/2);
}


function moverEnemigos(){
	for(i in enemigos){
		enemigos[i]["rect2"].x -= 0.3;
		//console.log(enemigos[i]["rect2"].x);
		$("#enemy"+i).css({ "left": enemigos[i]["rect2"].x+"px" });
	}
}


function efectoGravedad(){
	if(gravedad < 2.8){
		gravedad += 0.025;
	}

	if(markY >= limiteSuelo){ //FIXME: ESTABLECER EL LIMITE CONSTANTE DEL SUELO (MITAD PANTALLA + MITAD DEL LIENZO);
		enPiso = true;
		markY = limiteSuelo;
		return;
	}
	markY += gravedad;
	
}


function addKeyBoardevents()
{
	//Esta función agrega los eventos al teclado para IE y otros navgs.
	addEvent(document, "keydown",function(e){
		//True a la tecla aplastada.
		keyboard[e.keyCode] = true;
	});
	addEvent(document, "keyup",function(e){
		//False a la tecla que se levantó
		keyboard[e.keyCode] = false;
		//console.log(e.keyCode);
	});
	function addEvent(element, eventName, func)
	{
		if(element.addEventListener)
		{
			//Buenos navegadores (Chrome, Firefox, Opera etc.)
			element.addEventListener(eventName,func,false);
		}
		else if(element.attachEvent)
		{
			//Navegadores de Microsoft
			element.attachEvent(eventName,func);
		}
	}

}


var indPlataforma = -1;

function colisionesMark(rect){



	if(!saltando){
		
		if(indPlataforma == -1){
			for(i in enemigos){
				const maskY = Math.round(rect.y+50);
				const corY = Math.round(enemigos[i]["rect2"].y);

				const maskX = Math.round(markX+50);
				const corX = Math.round(enemigos[i]["rect2"].x);

				
				//console.log(maskX +" - "+corX);

				if(maskY <= corY+20 && maskY >= corY && maskX < corX+enemigos[i]["rect2"].width && markX > corX){
					console.log("COlision pap");
					indPlataforma = i;
					enPiso = true;

					break;
					
				}

				
			}
		}
		else{
			const maskY = Math.round(rect.y+50);
			const corY = Math.round(enemigos[indPlataforma]["rect2"].y);

			const maskX = Math.round(rect.x+50);
			const corX = Math.round(enemigos[indPlataforma]["rect2"].x);

			if(maskX < corX+enemigos[indPlataforma]["rect2"].width && markX > corX){
					
			}
			else{
				enPiso = false;
				indPlataforma = -1;
			}


		}
	}

}


function colisionesEnemigo(rect){


	rect["width"] = 7;
	rect["height"] = 4;

	for(i in enemigos){
		if (rect.x < enemigos[i]["rect2"].x + enemigos[i]["rect2"].width && rect.x + rect.width > enemigos[i]["rect2"].x && rect.y < enemigos[i]["rect2"].y + enemigos[i]["rect2"].height && rect.height + rect.y > enemigos[i]["rect2"].y) {
			console.log("#enemy"+i);
			//$("#enemy").css({ "border" : " solid red" });
			if(!leDIo){
				$("#enemy"+i).css({ "border" : " solid red" });
				leDIo = true;
			}
			else{
				$("#enemy"+i).css({ "border" : " solid black" });
				leDIo = false;
			}
		}
	}

}