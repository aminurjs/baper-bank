


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInput('withdraw-box');
    if(isNaN(withdrawAmount)){
        alert('Please provide a valid number.');
        return;
    }
    const withdrawPreTotal = getText('withdraw-total');
    const withdrawAmountTotal = withdrawAmount + withdrawPreTotal;

    const balancePre = getText('total-amount');
    if(withdrawAmount > balancePre){
        alert('Baper bank a eto taka nai');
        return;
    }
    const balanceTotalNow = balancePre - withdrawAmount;

    setText('withdraw-total', withdrawAmountTotal)
    setText('total-amount', balanceTotalNow)
})
