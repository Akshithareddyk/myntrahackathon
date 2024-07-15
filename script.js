document.getElementById('loginLink').addEventListener('click', function() {
    const choice = confirm('Do you have an account? Click OK to Sign In, Cancel to Create a New Account.');
    if (choice) {
        window.location.href = 'sign-in.html';
    } else {
        window.location.href = 'sign-up.html';
    }
});
