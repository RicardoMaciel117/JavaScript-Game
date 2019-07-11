
var teclado = {
	iniciar : function() {
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
		function addEvent(element, eventName, func){
			if(element.addEventListener){
				//Buenos navegadores (Chrome, Firefox, Opera etc.)
				element.addEventListener(eventName,func,false);
			}
			else if(element.attachEvent){
				//Navegadores de Microsoft
				element.attachEvent(eventName,func);
			}
		}
	}
}