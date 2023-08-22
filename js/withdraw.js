document.getElementById('button-withdraw').addEventListener('click', function(){
    const withdrawFieldElement = document.getElementById('withdraw-input');
    const withdrawField = parseFloat(withdrawFieldElement.value);

    if(isNaN(withdrawField)){
        return;
    }
    const totalMoneyFieldElement = document.getElementById('total-money-field');
    const totalMoneyString = totalMoneyFieldElement.innerText;
    const totalMoney = parseFloat(totalMoneyString);
    if(withdrawField > totalMoney){
        alert('sorry you cannot withdraw more money then the total money');
        withdrawFieldElement.value = '';
        return;
    }
    
    
    const withdrawAmountElement = document.getElementById('withdrawed-amount');
    const withdrawAmountString = withdrawAmountElement.innerText;
    const withdrawAmount = parseFloat(withdrawAmountString);
    const newWithdrawAmount = withdrawAmount + withdrawField;
    withdrawAmountElement.innerText = newWithdrawAmount.toFixed(2)
    
    withdrawFieldElement.value = '';
    

    const newTotalMoney = totalMoney - withdrawField;
    totalMoneyFieldElement.innerText = newTotalMoney.toFixed(2);
})