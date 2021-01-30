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


//  Deposite Button Event Handler
let depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function (event) {
    // deposit Amount
    const depositAmount = document.getElementById('deposit-amount').value;
    let depositNumber = parseFloat(depositAmount);
    if (depositNumber.toString() != "NaN") {
        if (depositNumber < 0) {
            depositNumber = 0;
        }

        // Update Deposite
        updateSpanText('current-deposit', depositNumber)

        // Update Balance
        updateSpanText('current-balance', depositNumber)
    }

    document.getElementById('deposit-amount').value = "";
});


// withdraw Amount
// const withdrawAmount = document.getElementById('withdraw-amount').value;
//  Withdraw Button Event Handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function (event) {
    // deposit Amount
    const withdrawAmount = getInputNumber('withdraw-amount');
        // Update Deposite
        updateSpanText('current-withdraw', withdrawAmount);

        // Update Balance
        updateSpanText('current-balance', -withdrawAmount);
        
});


// update Balance
function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentAmount = parseFloat(current);
    const totalAmount = currentAmount + depositNumber;
    document.getElementById(id).innerText = totalAmount;
}

//button event handler

function getInputNumber(id) {
    const inputAmount = document.getElementById(id).value;
    let inputNumber = parseFloat(inputAmount);
    if (inputNumber.toString() != "NaN") {
        if (inputNumber < 0) {
            inputNumber = 0;
        }
    } else{
        inputNumber = 0;
    }
    document.getElementById(id).value = "";
    return inputNumber;
}