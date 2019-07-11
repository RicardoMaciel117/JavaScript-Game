
function initCanvi(){
	lienzo.css({
    	left: ($(window).width() - lienzo.outerWidth())/2,
    	top: $(window).scrollTop()+($(window).height()/2) - lienzo.outerHeight()/2 ,
    	visibility: "visible"
	});

	lienzo.append("<div id='rejaX' class='reja' style='top: "+((lienzo.outerHeight()/2)-1)+"px; left: 0px; width: "+lienzo.outerWidth()+"px; height: 3px;'></div>");
	lienzo.append("<div id='rejaY' class='reja' style='top: 0px; left: "+((lienzo.outerWidth()/2)-1)+"px; width: 3px; height: "+((lienzo.outerHeight())-1)+"px;'></div>");

	limiteSuelo = lienzo.outerHeight()-91;

	

/*
	lienzo.append("<div id='enemy0' class='enemy' style='width: 200px; height: 20px; border: solid;  top: "+(limiteSuelo-90)+"px; left: "+(lienzo.outerWidth()-450)+"px; background: white; position: absolute;'></div>")
	enemigos[0]["rect2"] = {x: lienzo.outerWidth()-450, y: limiteSuelo-90, width: 200, height: 20};
	


	lienzo.append("<div id='enemy1' class='enemy' style='width: 200px; height: 20px; border: solid;  top: "+(limiteSuelo-150)+"px; left: "+(lienzo.outerWidth()-590)+"px; background: white; position: absolute;'></div>")
	enemigos[1]["rect2"] = {x: lienzo.outerWidth()-590, y: limiteSuelo-150, width: 200, height: 20};

	

	enemigos[2]["rect2"] = {x: lienzo.outerWidth()-200, y: limiteSuelo-220, width: 220, height: 20};
	lienzo.append("<div id='enemy2' class='enemy' style='width: 220px; height: 20px; border: solid;  top: "+(limiteSuelo-220)+"px; left: "+(lienzo.outerWidth()-200)+"px; background: white; position: absolute;'></div>")



	enemigos[3]["rect2"] = {x: lienzo.outerWidth()-250, y: limiteSuelo-20, width: 120, height: 20};
	lienzo.append("<div id='enemy3' class='enemy' style='width: 120px; height: 20px; border: solid;  top: "+(limiteSuelo-20)+"px; left: "+(lienzo.outerWidth()-250)+"px; background: white; position: absolute;'></div>")


	//--------------------------
	enemigos[4]["rect2"] = {x: cubyX, y: cubyY, width: 125, height: 25};
	lienzo.append("<div id='cuby' class='enemy' style='width: 125px; color: blueviolet; height: 25px; border: solid;  top: "+(cubyY)+"px; left: "+cubyX+"px; background: white; position: absolute;'></div>")


	markY = limiteSuelo;

	rectMark  = {x: markX, y: markY, width: 52, height: 85}
	*/
}