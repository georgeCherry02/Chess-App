<?php include_once "inc/constants.inc.php"; ?>
<!DOCTYPE html>
<html>
	<head>
		<title>Chess App</title>
		<link rel='stylesheet' href='css/main.css' type='text/css'/>
		<script src='scripts/constants.js'></script>
	</head>
	<body>
		<div id='page-wrap'>
			<div id='board'>
			</div>
		</div>
<?php
	foreach (PIECES as $piece) {
		$str = "scripts/pieces/" . $piece . ".js";
		echo ("<script src='" . $str . "'></script>");
	}
?>
		<script src='scripts/game.js'></script>
		<script src='scripts/boardGen.js'></script>
		<script>
			genBoard();
		</script>
	</body>
</html>
