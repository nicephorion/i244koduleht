<!DOCTYPE html>
<html>
	<head>
	<meta charset="UTF-8">				
	<link rel="stylesheet" type="text/css" href="mystyle.css">
		<title>heihops</title>
	</head>
	<body>

		<p id="demo"></p>
		<script src="myscript.js"></script>
		
		<?php
		echo 'Current PHP version: ' . phpversion();
		echo phpversion()

		/*$host = "localhost";
   		$user = "test";
    		$pass = "t3st3r123";
    		$db = "test";

    		$l = mysqli_connect($host, $user, $pass, $db);
   		mysqli_query($l, "SET CHARACTER SET UTF8") or
           		die("Error, ei saa andmebaasi charsetti seatud");
   
   		mysqli_close($l);
		*/
		?>

		<h1>retseptid</h1>
		<h6>india pähkli juustuga lasanje</h6>
		<img src="lasagna.jpg" alt="lasagna" width="500">
		<br>
		<h6>šokolaaditort</h6>
		<img src="tort.jpg" alt="tort" width="500">
		<br>
	</body>
</html>
