document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add your form submission logic here, e.g., sending data to a server
        // For demonstration purposes, let's just log the form data to the console
        const formData = new FormData(contactForm);
        for (const entry of formData.entries()) {
            console.log(entry[0] + ': ' + entry[1]);
        }

        // Optionally, you can reset the form after submission
        contactForm.reset();
    });
});
