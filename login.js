document.getElementById('login-button').addEventListener('click', function () {
    // get email from input
    const userEmail = document.getElementById('user-email')
    const email = userEmail.value
    // get password from input
    const userPassword = document.getElementById('user-password')
    const password = userPassword.value

    if (email == 'admin@admin.com' && password == 123) {
        window.location.href = 'dashboard.html'
    }
    else {
        alert('Please try again')
    }

})