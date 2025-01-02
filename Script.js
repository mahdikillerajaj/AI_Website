// Initialize EmailJS
emailjs.init('YOUR_USER_ID'); // Add your EmailJS user ID

// Feedback Message Display Function
function showFeedbackMessage(message, type) {
  const feedbackMessage = document.getElementById("feedback-message");
  feedbackMessage.textContent = message;
  feedbackMessage.className = type === "success" ? "success-message" : "error-message";
}

// Contact Us Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission

  const userEmail = document.getElementById("user-email").value;
  const userMessage = document.getElementById("user-message").value;

  const templateParams = {
    to_email: "mahdikh7889@gmail.com",  // Your email
    from_name: userEmail,
    message: userMessage,
  };

  emailjs.send('service_f5185ih', 'template_ten5nx3', templateParams)
    .then(function (response) {
      showFeedbackMessage("Your message has been sent successfully!", "success");
      document.getElementById("user-email").value = "";
      document.getElementById("user-message").value = "";
    }, function (error) {
      showFeedbackMessage("Oops! Something went wrong. Please try again.", "error");
    });
});
