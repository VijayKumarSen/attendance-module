const Btn = document.getElementById('submit');
Btn.addEventListener('click', () => {
const userName = document.getElementById('username');
const Password = document.getElementById('password');

    if(userName.value === '' && Password.value === '') {
        alert('Please fill in all fields');
    }
    else if(userName.value === 'admin' && Password.value === '123456') {
        window.location.href = 'dashboard.html';
        alert('Login successful');
            }
    else {
        alert('Invalid username or password');
    }

});