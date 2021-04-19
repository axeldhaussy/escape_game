function leftDoor(){
    window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page5.html";
}

function rightDoor(){
    window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page5b.html";
}

function upstairs(){
    window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page7.html";
}

function downstairs(){
    window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page7b.html";
}

function look(){
	document.body.style.backgroundImage = "url('images/page66.jpg')";
	document.body.style.backgroundPosition = "320px 10px";
	document.getElementById("stairs").style.display = "block";
	document.getElementById("upstairs").style.display = "inline-block";
	document.getElementById("downstairs").style.display = "inline-block";
}