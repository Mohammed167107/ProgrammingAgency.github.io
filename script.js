// Initialize EmailJS
(function(){
    emailjs.init("service_hhu8p7l");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email via EmailJS
    emailjs.send("service_hhu8p7l", "template_yjyehgb", {
        name: name,
        email: email,
        message: message
    }).then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Please try again.");
    });
});
