function confirmer(){
    var res = confirm("Are you sure you want to exit?");
    if(res)
        return true;
    else
    	return false;
}

function pictureChange(){
	document.body.style.backgroundImage = "url('images/pyramid_close.jpg')";
}

function pictureChange2(){
	document.body.style.backgroundImage = "url('images/pyramid_close2.jpg')";
	document.getElementById("myDiv1").style.display = "block";
	document.getElementById("exit").style.marginTop = "24vh"
}

//music
function stopMusic(){
	var sound = document.getElementById("music");
	if (sound.paused){
		sound.play();
		document.getElementById("musicButton").src = "images/music.png";
	} else {
		sound.pause();
		document.getElementById("musicButton").src = "images/noMusic.png";
	}
}