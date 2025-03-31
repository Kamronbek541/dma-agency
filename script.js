

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Send the email using EmailJS
    emailjs.sendForm('service_9w1opvg', 'template_23y71pp', this)
        .then(function(response) {
            alert('Email successfully sent!'); // Show success alert
            document.getElementById('contact-form').reset(); // Reset the form fields
            setTimeout(function() { // Set a timeout to refresh after a short delay
                window.location.reload(); // Refresh the page
            }, 2000); // Wait for 2 seconds before refreshing
        }, function(error) {
            alert('Failed to send email: ' + JSON.stringify(error)); // Show error alert
        });
});

