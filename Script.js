// Initialize EmailJS
(function() {
  emailjs.init('ORZHdjdcYlCEf-PEf'); // Public Key
})();

// Feedback Message Display Function
function showFeedbackMessage(message, type) {
  const feedbackMessage = document.getElementById("feedback-message");
  feedbackMessage.textContent = message;
  feedbackMessage.className = type === "success" ? "success-message" : "error-message";
}

// Send Email Function
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const userEmail = document.getElementById("user-email").value;
  const userMessage = document.getElementById("user-message").value;

  const templateParams = {
    to_email: userEmail,  // User's email
    from_name: "AI Power", // From name
    message: userMessage  // Message content
  };

  emailjs.send('service_f5185ih', 'template_ten5nx3', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response);
      showFeedbackMessage("Message sent successfully!", "success");
      document.getElementById("contact-form").reset(); // Clear form
    }, function(error) {
      console.log('FAILED...', error);
      showFeedbackMessage("Failed to send message. Please try again later.", "error");
    });
});
