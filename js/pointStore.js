let depositBtn = document.getElementById('depositBtn');
let withdrawBtn = document.getElementById('withdrawBtn');
let depositAmount = document.getElementById('depositAmount');
let withdrawAmount = document.getElementById('withdrawAmount');
let depositDisplay = document.getElementById('depositDisplay');
let balanceDisplay = document.getElementById('balanceDisplay');
let withdrawDisplay = document.getElementById('withdrawDisplay');


//deposit actions
depositBtn.addEventListener('click', function () {

    let newDeposit = parseInt(depositAmount.value);
    let previousDeposit = parseInt(depositDisplay.innerHTML);

    if (newDeposit <= 0) {
        alert('Wrong input');
    }
    else {
        // increment total deposit
        let totalDeposit = newDeposit + previousDeposit;
        depositDisplay.innerHTML = totalDeposit;

        //increment total balance
        let previousBalance = parseInt(balanceDisplay.innerHTML);
        balanceDisplay.innerHTML = previousBalance + newDeposit;
    }
    depositAmount.value = '';


})

// withdraw actions

withdrawBtn.addEventListener('click', function () {
    
    let newWithdraw = parseInt(withdrawAmount.value);
    let previousWithdraw = parseInt(withdrawDisplay.innerHTML);

    if (newWithdraw <= 0) {
        alert('Wrong input');
    }
    else {
        //increment total withdraw
        let totalWithdraw = newWithdraw + previousWithdraw;
        withdrawDisplay.innerHTML = totalWithdraw;

        //decrement total balance
        let previousBalance = parseInt(balanceDisplay.innerHTML);
        balanceDisplay.innerHTML = previousBalance - newWithdraw;
    }

    withdrawAmount.value = '';
})