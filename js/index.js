document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click" , () => {
        const parent = item.parentElement;
        parent.classList.toggle( 'active' );
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const form = document.querySelector('form'); // Assumes the inputs are inside a form element
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const submitButton = document.querySelector('.b2');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Add click event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Reset any previous error states (optional, if you add visual feedback later)
        fname.style.border = '';
        email.style.border = '';
        subject.style.border = '';
        message.style.border = '';

        // Validation flags
        let isValid = true;
        let errorMessage = '';

        // Validate name
        if (fname.value.trim() === '') {
            errorMessage += 'Name is required.\n';
            fname.style.border = '1px solid red';
            isValid = false;
        } else if (fname.value.trim().length < 2) {
            errorMessage += 'Name must be at least 2 characters long.\n';
            fname.style.border = '1px solid red';
            isValid = false;
        }

        // Validate email
        if (email.value.trim() === '') {
            errorMessage += 'Email is required.\n';
            email.style.border = '1px solid red';
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            errorMessage += 'Please enter a valid email address.\n';
            email.style.border = '1px solid red';
            isValid = false;
        }

        // Validate subject
        if (subject.value.trim() === '') {
            errorMessage += 'Subject is required.\n';
            subject.style.border = '1px solid red';
            isValid = false;
        } else if (subject.value.trim().length < 3) {
            errorMessage += 'Subject must be at least 3 characters long.\n';
            subject.style.border = '1px solid red';
            isValid = false;
        }

        // Validate message
        if (message.value.trim() === '') {
            errorMessage += 'Message is required.\n';
            message.style.border = '1px solid red';
            isValid = false;
        } else if (message.value.trim().length < 10) {
            errorMessage += 'Message must be at least 10 characters long.\n';
            message.style.border = '1px solid red';
            isValid = false;
        }

        // Display errors or proceed
        if (!isValid) {
            alert(errorMessage);
        } else {
            alert('Form validated successfully! Ready to submit.');
            // Uncomment the line below to submit the form if connected to a backend
            // form.submit();
        }
    });
});
