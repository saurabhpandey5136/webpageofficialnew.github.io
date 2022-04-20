var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "scott" && password == "tiger"){
window.location = "otherpages/main.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
if( attempt == 0){
alert("User not identified...Please Contact the Admin");
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
