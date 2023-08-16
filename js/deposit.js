

document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-box');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    
    depositField.value = '';
    if(isNaN(depositAmount)){
        alert('Please provide a valid number.');
        return;
    }

    const depositBox = document.getElementById('deposit-amount');
    const depositString = depositBox.innerText
    const depositTotal = parseFloat(depositString);

    depositBox.innerText = depositTotal + depositAmount;

    const totalBox = document.getElementById('total-amount');
    const totalAmountString = totalBox.innerText
    const totalAmount = parseFloat(totalAmountString);

    totalBox.innerText = totalAmount + depositAmount;



})