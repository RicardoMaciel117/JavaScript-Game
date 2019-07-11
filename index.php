<!DOCTYPE html>
<html>
<head>
	<title>MadBall</title>
	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
</head>
<body>

<div id="lienzo">

<div id="mark">

</div>

</div>

<?php

$time = time();
$timeStamp = date("d-m-Y (H:i:s)", $time);

$scripts = array("jquery-3.3.1.min","superMain","buclePrincipal","teclado","gestorMark","ajustarCanvi");

for($i = 0; $i < sizeof($scripts); $i++){
	echo '<script type="text/javascript" src="assets/js/'.$scripts[$i].'.js?'.$timeStamp.'"></script>';
}

?>


</body>
</html>
