//check user input
var nb = 0;
var max = 3;

function check(){
	var str = document.getElementById("answer").value;
	if((str == 1000001) && (nb < max)){
        alert("CORRECT!");
        window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page4.html";
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
    	document.body.style.backgroundImage = "url('images/jail.png')";
    	document.body.style.backgroundPosition = "300px -150px";
    	document.body.style.backgroundColor = "grey";
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
	if((str == 13) && (nb < max)){
        alert("CORRECT!");
        window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page6.html";
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
    	document.body.style.backgroundImage = "url('images/jail.png')";
    	document.body.style.backgroundPosition = "300px -150px";
    	document.body.style.backgroundColor = "grey";
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
    if((str == 27) && (nb < max)){
        alert("CORRECT!");
        window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page6b.html";
        document.getElementById("checkbutton").style.display = "none";
        document.getElementById("answer").style.display = "none";
    } else{
        var result = max - nb - 1;
        alert("WRONG! " + " Remaining tries: " + result);
        nb ++;
    }
    if(nb == 3){
        alert("Sorry it was your last chance... The pyramid got you. You will now go to jail for 15 seconds before trying again");
        document.body.style.backgroundImage = "url('images/jail.png')";
        document.body.style.backgroundPosition = "300px -150px";
        document.body.style.backgroundColor = "grey";
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
    	window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page3.html";
    } 
    else {	
        document.getElementById("bip").innerHTML = counter + " seconds";
    }	
}
function bip2(){
    counter--;
    if(counter == 0){
    	finish();
    	window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page5.html";
    } 
    else {	
        document.getElementById("bip").innerHTML = counter + " seconds";
    }	
}
function bip3(){
    counter--;
    if(counter == 0){
        finish();
        window.location.href="file:///Users/axel/Desktop/Web%20Technologies/Projet/escape_game/page5b.html";
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
  intervalId2 = setInterval(bip2, 1000);
}
function start3(){
  intervalId2 = setInterval(bip3, 1000);
}

//help button
function help(){
	document.getElementById("idea").style.display = "block";
}

//exit button
function confirmer(){
    var res = confirm("Are you sure you want to exit?");
    if(res)
        return true;
    else
    	return false;
}