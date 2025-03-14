document.getElementById('verifyBtn').addEventListener('click', function() {
    const code = document.getElementById('code').value;
    const messageElement = document.getElementById('message');

    // Check if the code is correct (let's say the correct code is "1234")
    if (code === '1709') {
        messageElement.innerText = 'Code verified! Proceeding...';
        messageElement.classList.add('correct');
        messageElement.style.display = 'block';

        // Show loading animation and then redirect after a delay
        setTimeout(() => {
            document.body.style.animation = 'pageTransition 2s forwards';
            setTimeout(() => {
                window.location.href = 'main.html'; // Redirect after fade-out
            }, 5000);
        }, 1000);
    } else {
        messageElement.innerText = 'Invalid code. Please try again!';
        messageElement.classList.add('incorrect');
        messageElement.style.display = 'block';

        // Make the error message shake or do something fun
        setTimeout(() => {
            messageElement.classList.remove('incorrect');
        }, 1500);
    }
});
