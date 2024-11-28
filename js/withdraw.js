


document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInput('deposit-box');
    if(isNaN(depositAmount)){
        alert('Please provide a valid number.');
        return;
    }
    const depositPreTotal = getText('deposit-total');

    const depositAmountTotal = depositAmount + depositPreTotal;

    const balancePreTotal = getText('total-amount');
    const balanceTotal = depositAmountTotal + balancePreTotal ;

    setText('deposit-total', depositAmountTotal)
    setText('total-amount', balanceTotal)
})
