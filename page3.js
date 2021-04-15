//check user input
var nb = 0;
var max = 3;

function check(){
	var str = document.getElementById("answer").value;
	if((str.includes("1000001")) && (nb < max)){
        alert("CORRECT!");
        document.body.style.backgroundImage = "url('images/pyramid_close2.jpg')";
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

		start();
    }
}

//timer
var counter = 15;
var intervalId = null;

function finish() {
  clearInterval(intervalId);
  nb = 0;
  counter = 15;
}
function bip() {
    counter--;
    if(counter == 0){
    	finish();
    	document.body.style.backgroundImage = "url('images/fond_game.jpg')";
    	document.body.style.backgroundColor = "orange";
    	document.body.style.backgroundPosition = "330px -70px";
    	document.getElementById("exit").style.display = "block";
    	document.getElementById("checkbutton").style.display = "block";
		document.getElementById("answer").style.display = "block";
		document.getElementById("bip").style.display = "none";
		document.getElementById("bip1").style.display = "none";
    } 
    else {	
        document.getElementById("bip").innerHTML = counter + " seconds";
    }	
}
function start(){
  intervalId = setInterval(bip, 1000);
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