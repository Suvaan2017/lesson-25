
function validate(e){
e.preventDefault();

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const age = document.getElementById("age").value;
const msgbox = document.getElementById("message");

let message ="";

if (email === "") {
    message = "please enter a email";
    msgbox.style.color = "red";
} else if (password === "") {
    message = "please enter a password";
    msgbox.style.color = "red";
} else if (age === "") {
    message = "age must be between 12 and 50";
    msgbox.style.color = "red";
} 

else {
    message = "login successful";
    msgbox.style.color = "green";
}

   msgbox.innerText = message;
}