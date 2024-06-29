// Add form validation
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (fullname === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }

    // Add form submission logic here
    // For example, you can send a POST request to your server
    // to create a new user
    fetch('/create-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname,
            email,
            password
        })
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            alert('Account created successfully');
        } else {
            alert('Error creating account');
        }
    })
    .catch((error) => {
        console.error(error);
    });
});

// Add hide password functionality
document.getElementById('hide-password').addEventListener('click', () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        document.getElementById('hide-password').innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    } else {
        passwordInput.type = 'password';
        document.getElementById('hide-password').innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
});
