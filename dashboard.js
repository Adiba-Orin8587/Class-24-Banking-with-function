function getInput(inputId) {
    const inputfield = document.getElementById(inputId)
    const inputText = inputfield.value
    const inputAmmount = parseFloat(inputText)

    // clear the value
    inputfield.value = ''

    return inputAmmount
}

// set ammount in deposite box

function updateTotal(updateId, newInputAmmount) {
    const depositeTotal = document.getElementById(updateId)
    const previousDeposite = depositeTotal.innerText
    const previousDepositeAmmount = parseFloat(previousDeposite)
    depositeTotal.innerText = previousDepositeAmmount + newInputAmmount

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const balanceTotalAmmount = parseFloat(balanceTotalText)
    return balanceTotalAmmount

}


// balance update
function updateBalance(ammount, isAdd) {
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalAmmount = getCurrentBalance()
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmmount + ammount
    }
    else {
        balanceTotal.innerText = balanceTotalAmmount - ammount
    }


}


// deposit button
document.getElementById('deposite-button').addEventListener('click', function () {
    const newDepositAmmount = getInput('deposite')
    if (newDepositAmmount > 0) {
        updateTotal('deposite-total', newDepositAmmount)
        updateBalance(newDepositAmmount, true)
    }

    if (newDepositAmmount < 0) {
        alert("Sorry,try again.Please enter valid number as ammount")
    }

})


// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmmount = getInput('withdraw')
    const currentBalance = getCurrentBalance()

    if (newWithdrawAmmount > 0 && newWithdrawAmmount <= currentBalance) {
        updateTotal('withdraw-total', newWithdrawAmmount)
        updateBalance(newWithdrawAmmount, false)
    }
    if (newWithdrawAmmount < 0) {
        alert("Sorry,try again")
    }
    if (newWithdrawAmmount > currentBalance) {
        alert("Sorry,you haven't sufficient balance")
    }


})





