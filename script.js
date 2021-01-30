


//  login Button Event Handler
let loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // login Area
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    // transation Area
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
});


// withdraw Ammount
const withdrawAmmount = document.getElementById('withdraw-ammount').value;

//  Deposite Button Event Handler
let depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function (event) {
    // deposit Ammount
    const depositAmmount = document.getElementById('deposit-ammount').value;

    console.log(parseFloat(depositAmmount));
});