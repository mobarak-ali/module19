// login Area
let loginArea = document.getElementById('login-area');
// transation Area
let transactionArea = document.getElementById('transaction-area');

//  login Button
let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
    console.log("None!");
});