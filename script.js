


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
    const depositAmount = document.getElementById('deposit-ammount').value;
    const depositNumber = parseFloat(depositAmount);
    if(depositNumber.toString() != "NaN" ){
        console.log(depositNumber);
        const currentDeposit = document.getElementById('current-deposit').innerText;
        const currentDepositAmmount = parseFloat(currentDeposit);
        const totalDeposit = depositNumber + currentDepositAmmount;
        
        document.getElementById('current-deposit').innerText = totalDeposit;
    }

    document.getElementById('deposit-ammount').value = "";
});