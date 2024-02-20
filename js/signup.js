function SignUp() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    if (email.indexOf("@") === -1) {
      alert("Invalid email address.");
      return;
  }
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    
  var array = [];
if(password==confirmPassword){
   localStorage.setItem('name', username);
   localStorage.setItem('pass', password); 
   localStorage.setItem('confirmPassword', confirmPassword);   
   localStorage.setItem('email', email);
         array.push(username);
         array.push(password);
         array.push(confirmPassword);
         array.push(email);
}
else{
    return alert("error")
}

  
// var array = [];
//     if (password === confirmPassword) {
//       var userData = {
//         name: username,
//         pass: password,
//         mail: email
//       };
  
//       localStorage.setItem('userData', JSON.stringify(userData));
//     } else {
//       alert("Passwords do not match!");
//     }
  }


// // //   ____________
  
  function LogIn() {
    var username = document.getElementById('username').value; //take inputs
    var password = document.getElementById('password').value;

  
    var storedUserData = localStorage.getItem('userData'); //variable to get back user data that was already stored in localStorage
    if (storedUserData) {
      var userData = JSON.parse(storedUserData);
  
      if (username === userData.name && password === userData.pass && email === userData.mail) {
        alert("Login successful!");
      } else {
        alert("Invalid username or password");
        location.assign("LogIn.html");
      }
    } else {
      alert("User not found");
      location.assign("LogIn.html");
    }
  }
array.push(userData);
// // _____________________
// // signup.js

// var users = []; // Array to store user data

// function signUp() {
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var confirmPassword = document.getElementById("confirmPassword").value;


//     // Validate the input fields
//     if (username === "" || email === "" || password === "" || confirmPassword === "") {
//         alert("Please fill in all fields.");
//         return;
//     }

//     if (password !== confirmPassword) {
//         alert("Passwords do not match.");
//         return;
//     }

//     // Create a user object
//     var user = {
//         username: username,
//         email: email,
//         password: password
//     };

//     // Add the user to the array
//     users.push(user);

//     // // Clear the input fields
//     // document.getElementById("username").value = "";
//     // document.getElementById("email").value = "";
//     // document.getElementById("password").value = "";
//     // document.getElementById("confirmPassword").value = "";

  
//     alert("Sign up successful!");
// }