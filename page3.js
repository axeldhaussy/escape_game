function check(){
	var str = document.getElementById("answer").value;
	if(str.includes("ipsum")){
        alert("CORRECT!");
        document.body.style.backgroundImage = "url('images/pyramid_close2.jpg')";
    } else{
        alert("WRONG");
    }
}