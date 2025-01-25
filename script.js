//typed js
var typed = new Typed('#element', {
  strings: ['Full stack Web Developer.', 'MERN Stack.', 'Fast Learner.'],
  typeSpeed: 60,
  loop: true,
  showCursor: false,
});

//Whatsapp from

document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "+919564120965";

    const whatsappMessage = `Hello, my name is ${name}. ${message}`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  });

document.querySelector("#year").textContent = new Date().getFullYear();
