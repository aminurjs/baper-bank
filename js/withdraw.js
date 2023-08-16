document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-box');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    withdrawField.value = '';
    if(isNaN(withdrawAmount)){
        alert('Please provide a valid number.');
        return;
    }



    const totalBox = document.getElementById('total-amount');
    const totalAmountString = totalBox.innerText
    const totalAmount = parseFloat(totalAmountString);

    if(withdrawAmount > totalAmount){
            alert('Baper bank a eto taka nai');
            return;
        }
    const withdrawBox = document.getElementById('withdraw-amount');
    const withdrawString = withdrawBox.innerText
    const withdrawTotal = parseFloat(withdrawString);
    

    withdrawBox.innerText = withdrawTotal + withdrawAmount;
    totalBox.innerText = totalAmount - withdrawAmount;


})