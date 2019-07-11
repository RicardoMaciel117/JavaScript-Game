
var buclePrincipal = {
	idEjecucion: null,
	ultimoRegistro: 0,
	aps: 0,
	fps: 0,
	iterar: function(registroTemporal){
		buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
		buclePrincipal.actualizar(registroTemporal);
		buclePrincipal.dibujar(registroTemporal);
		//markMovement();
		hiloPrincipal();
		//animarMark();
		if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
			buclePrincipal.ultimoRegistro = registroTemporal;
			//console.log("APS: "+buclePrincipal.aps+" FPS: "+buclePrincipal.fps);
			//Este bucle esta en 60 APS
			buclePrincipal.aps = 0;
			buclePrincipal.fps = 0;
		}
	},
	detener: function(registroTemporal){
		
	},
	actualizar: function(registroTemporal){
		buclePrincipal.aps++;
	},
	dibujar: function(registroTemporal){
		buclePrincipal.fps++;
	}
}
