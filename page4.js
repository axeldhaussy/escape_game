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
    document.body.style.backgroundImage = "url('images/noWay1.jpg')";
    document.body.style.backgroundPosition = "330px 0px";
    document.getElementById("upstairs").style.display = "none";
    document.getElementById("downstairs").style.display = "none";
    document.getElementById("buttonLook2").style.display = "none";
    document.getElementById("stairs").style.display = "none";
    document.getElementById("text1").innerHTML = "Oh, look out this room. It is a really dark place but you can see there is something at the back of the room. What is it?";
    document.getElementById("div2").style.display = "block";
    document.getElementById("exit").style.marginTop = "25vh"
}

function closer(){
    document.body.style.backgroundImage = "url('images/noWay12.jpg')";
    document.body.style.backgroundSize = "150vh";
    document.body.style.backgroundPosition = "333px 0px";
}

function lookInside(){
    document.body.style.backgroundImage = "url('images/noWay13.jpg')";
    document.body.style.backgroundSize = "80vh";
    document.body.style.backgroundPosition = "550px 0px";
    document.getElementById("stairs").style.display = "block";
    document.getElementById("stairs").innerHTML = "Well, it's look like there is nothing in it, and I don't see any doors. Maybe you should try to go upstairs...";
}

function back(){
    document.getElementById("text1").style.display = "block";
    document.getElementById("text1").innerHTML = "You find nothing down there?";
    window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page6.html";
}

function look(){
	document.body.style.backgroundImage = "url('images/page66.jpg')";
	document.body.style.backgroundPosition = "320px 10px";
	document.getElementById("stairs").style.display = "block";
	document.getElementById("upstairs").style.display = "inline-block";
	document.getElementById("downstairs").style.display = "inline-block";
}

function confirmer(){
    var res = confirm("Are you sure you want to exit?");
    if(res)
        return true;
    else
    	return false;
}