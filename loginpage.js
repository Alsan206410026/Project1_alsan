const slideleftbtn = document.getElementById('register');  // sign-up button

const sliderightbtn = document.getElementById('login');    // sign-in button

slideleftbtn.addEventListener('click', () => {
    container.classList.add("active");    // Go to Sign-Up side
});

sliderightbtn.addEventListener('click', () => {
    container.classList.remove("active"); // Go back to Sign-In side
});

let form = document.getElementById('signInForm');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let signInButton = document.getElementById('signInButton');

signInButton.addEventListener('click', function(event) {
    event.preventDefault(); // Stop normal form submit

    let email = emailInput.value;
    let password = passwordInput.value;

    if (!email.endsWith("@apexcollege.edu.np")) {
        alert("Invalid email domain");
        return false;
    } 
    if (password !== "project1") { 
        alert("Invalid password"); 
        return false;
    }
    else {
        window.location.href = 'shopping.html'; // Open next page
    }
});



