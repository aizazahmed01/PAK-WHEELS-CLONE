function myFunction(){
let userInput=document.querySelector("#userInput");
let message = document.querySelector('message');

message.innerHTML = "Welcome To My Website" + userInput.value;

}