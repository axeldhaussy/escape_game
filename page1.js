function confirmer(){
    var res = confirm("Are you sure you want to exit?");
    if(res)
        return true;
    else
    	return false;
}