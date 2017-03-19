var beads = document.getElementsByClassName('bead');
window.onload = function() {
	for (var counter in beads) {
		var oneBead = beads[counter];
		oneBead.onclick = function() {
			teiselePoole(oneBead);
		}
	}	
	function teiselePoole(bead) {
		alert("klikk")
		if (document.getElementsByClassName('bead').style.cssFloat == "left") {
			bead.style.cssFloat = "right";
		}
		else if (document.getElementsByClassName('bead').style.cssFloat == "right") {
			bead.style.cssFloat = "left";
		}
		else {
			alert("sumthing is not working")
		}
	}
}