const form= document.getElementById('rsvp-form');
form.addEventListener("submit",function(e) {;
//we removed e.preventDefault() so the form actually submits 
const button= document.getElementById('submit-btn');
button.innerHTML= "Sending...";
// The browser will now handle the sending and redirecting for you});                                           
