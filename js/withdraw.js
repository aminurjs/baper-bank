document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-box');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    const withdrawBox = document.getElementById('withdraw-amount');
    const withdrawString = withdrawBox.innerText
    const withdrawTotal = parseFloat(withdrawString);

    withdrawBox.innerText = withdrawTotal + withdrawAmount;

    const totalBox = document.getElementById('total-amount');
    const totalAmountString = totalBox.innerText
    const totalAmount = parseFloat(totalAmountString);

    totalBox.innerText = totalAmount - withdrawAmount;
    withdrawField.value = '';


})