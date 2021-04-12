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
}