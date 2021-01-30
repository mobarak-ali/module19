// login Area
let loginArea = document.getElementById('login-area');

//  login Button
let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    loginArea.style.display = "none";
    console.log("None!");
});