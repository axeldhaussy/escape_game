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
    document.getElementById("text1").innerHTML = "Wait! I can't belive it! It's the kehop sarcophagus! Pharaoh Kehops rested in this tomb.";
}

function lookInside(){
    document.body.style.backgroundImage = "url('images/noWay13.jpg')";
    document.body.style.backgroundSize = "80vh";
    document.body.style.backgroundPosition = "550px 0px";
    document.getElementById("stairs").style.display = "block";
    document.getElementById("stairs").innerHTML = "Well, it's look like there is nothing in it. You should continue, but I don't see any doors. Maybe you should try to go upstairs...";
}

function back(){
    document.getElementById("text1").style.display = "block";
    window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page6.html";
}

function look(){
	document.body.style.backgroundImage = "url('images/page66.jpg')";
	document.body.style.backgroundPosition = "320px 10px";
	document.getElementById("stairs").style.display = "block";
	document.getElementById("upstairs").style.display = "inline-block";
	document.getElementById("downstairs").style.display = "inline-block";
}
function look2(){
    document.getElementById("stairs").style.display = "block";
    document.getElementById("upstairs").style.display = "inline-block";
    document.getElementById("downstairs").style.display = "inline-block";
}
function left(){
    window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page8b.html";
}

function right(){
    document.body.style.backgroundImage = "url('images/noWay21.jpg')";
    document.body.style.backgroundSize = "152vh";
    document.body.style.backgroundPosition = "330px 0px";
    document.getElementById("upstairs").style.display = "none";
    document.getElementById("downstairs").style.display = "none";
    document.getElementById("buttonLook2").style.display = "none";
    document.getElementById("stairs").style.display = "none";
    document.getElementById("text1").innerHTML = "Wow! Look what you found! A magnificent sarcophagus. Do you think there is something in it?";
    document.getElementById("div2").style.display = "block";
    document.getElementById("exit").style.marginTop = "24vh"
}

function goLeft(){
    document.body.style.backgroundImage = "url('images/noWay2.jpg')";
    document.body.style.backgroundSize = "150vh";
    document.body.style.backgroundPosition = "333px 0px";
}

function goBehind(){
    document.body.style.backgroundImage = "url('images/noWay22.jpg')";
    document.body.style.backgroundSize = "150vh";
    document.body.style.backgroundPosition = "333px -50px";
    document.getElementById("stairs").style.display = "block";
    document.getElementById("stairs").innerHTML = "Oh shit! That scared me. It's look like excepted this guy on the floor there is nothing, and I don't see any doors. Maybe you should try to go back...";
}

function goBack(){
    document.getElementById("text1").style.display = "block";
    window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page7b.html";
}

//set cookie
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//exit button
function confirmer(){    
    //save part
    var save = 0;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page1.html")
        save = 1;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page2.html")
        save = 2;
    if(window.location.href == "file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page3.html")
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