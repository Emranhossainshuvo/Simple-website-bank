document.getElementById('button-deposit').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountString = depositInput.value;
    const depositAmount = parseFloat(depositAmountString);

    if (isNaN(depositAmount)) {
        return;
    }

    const depositedAmountElement = document.getElementById('deposited-amount');
    const depositedAmount = parseFloat(depositedAmountElement.innerText);

    const newDepositedAmount = depositedAmount + depositAmount;
    depositedAmountElement.innerText = newDepositedAmount.toFixed(2);

    depositInput.value = '';

    const totalMoneyFieldElement = document.getElementById('total-money-field');
    const totalMoneyString = totalMoneyFieldElement.innerText;
    const totalMoney = parseFloat(totalMoneyString);

    const newTotalMoney = totalMoney + depositAmount;
    totalMoneyFieldElement.innerText = newTotalMoney.toFixed(2);
});
``
