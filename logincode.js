
/**
if(userid === "jchung" && pswd === "12345"){
	.alert("Continue on");
}

else{
	.alert("Wrong username or password!");
	$("#Login").prop("disabled",true);
}
**/

   function login(theForm) {
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername = theForm["username"];
    var inputPassword = theForm["password"];
    var username = inputUsername.value;
    var password = inputPassword.value;
    if ((username == localStorage.getItem('username')) && (password == localStorage.getItem('password'))) {
     document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
      } else {
     document.getElementById('welcomeMessage').innerHTML = "Invalid Log-in!";
    }
    return false;
   } // end login()
