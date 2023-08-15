

document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email === 'dev.aminur@gmail.com' && password === 'secret'){
        window.location.href = './bank.html'
    }
    else if(email === '' || password === ''){
        alert('Please type Email & Password.');
        emailField.value = '';
    }
    else{
        alert('Invalid password. Please type valid Email & Password.')
    }
})