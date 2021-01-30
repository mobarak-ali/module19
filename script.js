// login Area
const loginArea = document.getElementById('login-area');
// transation Area
const transactionArea = document.getElementById('transaction-area');



//  login Button Event Handler
let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
    console.log("None!");
});

// deposit Ammount
const depositAmmount = document.getElementById('deposit-ammount').value;

// withdraw Ammount
const withdrawAmmount = document.getElementById('withdraw-ammount').value;

//  Deposite Button Event Handler
let depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function (event) {
console.log(depositAmmount);
});