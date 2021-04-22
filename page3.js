//create a cookie that long 1 day after its creation
document.cookie = 'user=John; path=/; max-age=86400';

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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


//check user input
var nb = 0;
var max = 3;

function check(){
	var str = document.getElementById("answer").value;
	if((str == 1001001) && (nb < max)){
        alert("CORRECT!");
        window.location.href="page4.html";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("help").style.display = "none";
     	document.getElementById("idea").style.display = "none";
    } else{
    	var result = max - nb - 1;
        alert("WRONG! " + " Remaining tries: " + result);
        nb ++;
    }
    if(nb == 3){
    	alert("Sorry it was your last chance... The pyramid got you. You will now go to jail for 15 seconds before trying again");
    	document.body.style.backgroundImage = "url('images/doorOpen.mp4')";
    	document.body.style.backgroundPosition = "260px 30px";
    	document.body.style.backgroundSize = "160vh";
    	document.body.style.backgroundColor = "grey";
    	document.getElementById("musicJail").play();
     	document.getElementById("exit").style.display = "none";
    	document.getElementById("checkbutton").style.display = "none";
		document.getElementById("answer").style.display = "none";
		document.getElementById("bip").style.display = "block";
		document.getElementById("bip1").style.display = "block";
		document.getElementById("help").style.display = "none";
     	document.getElementById("idea").style.display = "none";
        document.getElementById("triesLeft").style.display = "none";
        document.getElementById("triesR").style.display = "none";

		start();
    }
    document.getElementById("triesLeft").innerHTML = result;
}
function check2(){
	var str = document.getElementById("answer").value;
	if((str == 27) && (nb < max)){
        alert("CORRECT!");
        window.location.href="page6.html";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("help").style.display = "none";
     	document.getElementById("idea").style.display = "none";
    } else{
    	var result = max - nb - 1;
        alert("WRONG! " + " Remaining tries: " + result);
        nb ++;
    }
    if(nb == 3){
    	alert("Sorry it was your last chance... The pyramid got you. You will now go to jail for 15 seconds before trying again");
    	document.body.style.backgroundImage = "url('images/doorOpen.mp4')";
    	document.body.style.backgroundPosition = "260px 30px";
    	document.body.style.backgroundSize = "160vh";
    	document.body.style.backgroundColor = "grey";
    	document.getElementById("musicJail").play();
    	document.getElementById("triesLeft").style.display = "none";
    	document.getElementById("triesR").style.display = "none";
    	document.getElementById("div1").style.display = "none";
     	document.getElementById("exit").style.display = "none";
    	document.getElementById("checkbutton").style.display = "none";
		document.getElementById("answer").style.display = "none";
		document.getElementById("bip").style.display = "block";
		document.getElementById("bip1").style.display = "block";

		start2();
    }
    document.getElementById("triesLeft").innerHTML = result;
}

function check3(){
    var str = document.getElementById("answer").value;
    if((str == 40) && (nb < max)){
        alert("CORRECT!");
        window.location.href="page6b.html";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
    } else{
        var result = max - nb - 1;
        alert("WRONG! " + " Remaining tries: " + result);
        nb ++;
    }
    if(nb == 3){
        alert("Sorry it was your last chance... The pyramid got you. You will now go to jail for 15 seconds before trying again");
        document.body.style.backgroundImage = "url('images/doorOpen.mp4')";
    	document.body.style.backgroundPosition = "260px 30px";
    	document.body.style.backgroundSize = "160vh";
    	document.body.style.backgroundColor = "grey";
    	document.getElementById("musicJail").play();
        document.getElementById("triesLeft").style.display = "none";
        document.getElementById("triesR").style.display = "none";
        document.getElementById("div1").style.display = "none";
        document.getElementById("exit").style.display = "none";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("bip").style.display = "block";
        document.getElementById("bip1").style.display = "block";

        start3();
    }
    document.getElementById("triesLeft").innerHTML = result;
}
function check4(){
    var str = document.getElementById("answer").value;
    if((str == "LOUXOR") && (nb < max)){
        alert("CORRECT!");
        window.location.href="page8.html";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
    } else{
        var result = max - nb - 1;
        alert("WRONG! " + " Remaining tries: " + result);
        nb ++;
    }
    if(nb == 3){
        alert("Sorry it was your last chance... The pyramid got you. You will now go to jail for 15 seconds before trying again");
        document.body.style.backgroundImage = "url('images/doorOpen.mp4')";
    	document.body.style.backgroundPosition = "260px 30px";
    	document.body.style.backgroundSize = "160vh";
    	document.body.style.backgroundColor = "grey";
    	document.getElementById("musicJail").play();
        document.getElementById("triesLeft").style.display = "none";
        document.getElementById("triesR").style.display = "none";
        document.getElementById("div1").style.display = "none";
        document.getElementById("exit").style.display = "none";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("bip").style.display = "block";
        document.getElementById("bip1").style.display = "block";

        start4();
    }
    document.getElementById("triesLeft").innerHTML = result;
}
function check5(){
    var str = document.getElementById("answer").value;
    if((str == "KHEOPS") && (nb < max)){
        alert("CORRECT!");
        window.location.href="page7b.html";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
    } else{
        var result = max - nb - 1;
        alert("WRONG! " + " Remaining tries: " + result);
        nb ++;
    }
    if(nb == 3){
        alert("Sorry it was your last chance... The pyramid got you. You will now go to jail for 15 seconds before trying again");
        document.body.style.backgroundImage = "url('images/doorOpen.mp4')";
    	document.body.style.backgroundPosition = "260px 30px";
    	document.body.style.backgroundSize = "160vh";
    	document.body.style.backgroundColor = "grey";
    	document.getElementById("musicJail").play();
		document.getElementById("idea2").style.display = "none";
        document.getElementById("help").style.display = "none";
        document.getElementById("triesLeft").style.display = "none";
        document.getElementById("triesR").style.display = "none";
        document.getElementById("div1").style.display = "none";
        document.getElementById("exit").style.display = "none";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("bip").style.display = "block";
        document.getElementById("bip1").style.display = "block";

        start5();
    }
    document.getElementById("triesLeft").innerHTML = result;
}
function check6(){
    var str = document.getElementById("answer").value;
    if((str == 79) && (nb < max)){
        alert("CORRECT!");
        window.location.href="page8.html";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
    } else{
        var result = max - nb - 1;
        alert("WRONG! " + " Remaining tries: " + result);
        nb ++;
    }
    if(nb == 3){
        alert("Sorry it was your last chance... The pyramid got you. You will now go to jail for 15 seconds before trying again");
        document.body.style.backgroundImage = "url('images/doorOpen.mp4')";
    	document.body.style.backgroundPosition = "260px 30px";
    	document.body.style.backgroundSize = "160vh";
    	document.body.style.backgroundColor = "grey";
    	document.getElementById("musicJail").play();
        document.getElementById("triesLeft").style.display = "none";
        document.getElementById("triesR").style.display = "none";
        document.getElementById("div1").style.display = "none";
        document.getElementById("exit").style.display = "none";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("bip").style.display = "block";
        document.getElementById("bip1").style.display = "block";
        document.getElementById("help").style.display = "none";
        document.getElementById("idea").style.display = "none";

        start6();
    }
    document.getElementById("triesLeft").innerHTML = result;
}

//timer
var counter = 15;
var intervalId = null;

function finish(){
  clearInterval(intervalId);
  nb = 0;
  counter = 15;
}

function bip(){
    counter--;
    if(counter == 0){
    	finish();
    	window.location.href="page3.html";
    } 
    else {	
        document.getElementById("bip").innerHTML = counter + " seconds";
    }	
}
function bip2(){
    counter--;
    if(counter == 0){
    	finish();
    	window.location.href="page5.html";
    } 
    else {	
        document.getElementById("bip").innerHTML = counter + " seconds";
    }	
}
function bip3(){
    counter--;
    if(counter == 0){
        finish();
        window.location.href="page5b.html";
    } 
    else {  
        document.getElementById("bip").innerHTML = counter + " seconds";
    }   
}
function bip4(){
    counter--;
    if(counter == 0){
        finish();
        window.location.href="page7.html";
    } 
    else {  
        document.getElementById("bip").innerHTML = counter + " seconds";
    }   
}
function bip5(){
    counter--;
    if(counter == 0){
        finish();
        window.location.href="page6b.html";
    } 
    else {  
        document.getElementById("bip").innerHTML = counter + " seconds";
    }   
}
function bip6(){
    counter--;
    if(counter == 0){
        finish();
        window.location.href="page8b.html";
    } 
    else {  
        document.getElementById("bip").innerHTML = counter + " seconds";
    }   
}

//start timer
function start(){
  intervalId = setInterval(bip, 1000);
}
function start2(){
  intervalId = setInterval(bip2, 1000);
}
function start3(){
  intervalId = setInterval(bip3, 1000);
}
function start4(){
  intervalId = setInterval(bip4, 1000);
}
function start5(){
  intervalId = setInterval(bip5, 1000);
}
function start6(){
  intervalId = setInterval(bip6, 1000);
}

//help button
function help(){
	document.getElementById("idea").style.display = "block";
	document.getElementById("musicIdea").play();
}
function help2(){
	document.getElementById("idea2").style.display = "block";
	document.getElementById("musicIdea").play();
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