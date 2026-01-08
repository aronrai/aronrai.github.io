const ul = document.querySelector("ul");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("open");
  hamburger.classList.toggle("active");
  document.querySelectorAll("nav ul li").forEach((li) => {
    console.log(li.textContent);
    li.addEventListener("click", () => {
      ul.classList.remove("open");
      hamburger.classList.remove("active");
    });
    ul.addEventListener("click", () => {
      ul.classList.remove("open");
    });
  });
});

var typed = new Typed("#typed", {
  strings: ["Aron", "a javaScript Developer"],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true,
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const message = document.querySelector("#message").value;
  const finalMessage = `Hi, I'm ${name}. ${
    message || "I saw your site and wanted to reach out."
  }`;
  const encodedMessage = encodeURIComponent(finalMessage);
  window.open(`https://wa.me/9564120965?text=${encodedMessage}`);
  console.log(encodedMessage);
});
