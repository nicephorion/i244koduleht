window.onload = function() {
	if (document.getElementById('galerii') !== null ) {
		vanem = document.getElementById('galerii');
		pildiLingid = vanem.getElementsByTagName('a');
		
		for (var pildiIndeks in pildiLingid) {
			var pilt = pildiLingid[pildiIndeks];
			pilt.addEventListener('click', function showDetails(event) {
				event.preventDefault();
				
				var suurpilt = document.getElementById("suurpilt");
				suurpilt.setAttribute("src", event.target.parentNode.getAttribute("href"));
				document.getElementById('inf').innerHTML = event.target.alt;
				
				suurpilt.onload = function() { suurus(suurpilt); }
				document.getElementById('hoidja').style.display = "initial";
				return false;
			}, false );		
		}
	}
};

function hideDetails(){
	document.getElementById('hoidja').style.display = "none";	
}

function suurus(el){
	el.removeAttribute("height"); // eemaldab suuruse
	el.removeAttribute("width");
	if (el.width>window.innerWidth || el.height>window.innerHeight){  // ainult liiga suure pildi korral
		if (window.innerWidth >= window.innerHeight){ // lai aken
			el.height=window.innerHeight*0.9; // 90% kõrgune
			if (el.width>window.innerWidth){ // kas element läheb ikka üle piiri?
				el.removeAttribute("height");
				el.width=window.innerWidth*0.9;
			}
		} else { // kitsas aken
			el.width=window.innerWidth*0.9;   // 90% laiune
			if (el.height>window.innerHeight){ // kas element läheb ikka üle piiri?
				el.removeAttribute("width");
				el.height=window.innerHeight*0.9;
			}
		}
	}
}
