//exit button
function confirmer(){    
    //save part
    var save = 0;
    if(window.location.href == "page1.html")
        save = 1;
    if(window.location.href == "page2.html")
        save = 2;
    if(window.location.href == "page3.html")
        save = 3;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page4.html")
        save = 4;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page5.html")
        save = 5;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page5b.html")
        save = 6;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page6.html")
        save = 7;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page6b.html")
        save = 8;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page7.html")
        save = 9;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page7b.html")
        save = 10;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page8.html")
        save = 11;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page8b.html")
        save = 12;

    var res = confirm("Are you sure you want to exit? Your game will be saved anyway.");
    if(res){
        setCookie("save", save, 365);
        return true;
    }
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
//set cookie
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//load function
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function load(){
	var val = getCookie("save");
  console.log(val);
	if(val == 1)
		window.location.href = "page1.html";
	if(val == 2)
		window.location.href = "page2.html";
	if(val == 3)
		window.location.href = "page3.html";
	if(val == 4)
		window.location.href = "page4.html";
	if(val == 5)
		window.location.href = "page5.html";
	if(val == 6)
		window.location.href = "page5b.html";
	if(val == 7)
		window.location.href = "page6.html";
	if(val == 8)
		window.location.href = "page6b.html";
	if(val == 9)
		window.location.href = "page7.html";
	if(val == 10)
		window.location.href = "page7b.html";
	if(val == 11)
		window.location.href = "page8.html";
	if(val == 12)
		window.location.href = "page8b.html";
	else
		val = 1;
}