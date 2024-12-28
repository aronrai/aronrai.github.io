//typed js
var typed = new Typed('#element', {
  strings: ['Full stack Web Developer.', 'PERN / MERN Stack.', 'Fast Learner.'],
  typeSpeed: 50,
  loop: true,
  showCursor: false,
});

//Whatsapp from

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Phone number to send the message to (include country code, e.g., 919876543210 for India)
    const phoneNumber = "+919564120965";

    // Create the WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}. ${message}`;

    // Redirect to WhatsApp
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  });

document.querySelector("#year").textContent = new Date().getFullYear();
