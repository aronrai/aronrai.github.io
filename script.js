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

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const message = document.querySelector("#message").value;
  const finalMessage = `Hello, My name is ${name}. ${
    message || "I found you on Linkedin."
  }`;
  const encodedMessage = encodeURIComponent(finalMessage);
  window.open(`https://wa.me/9564120965?text=${encodedMessage}`);
  console.log(encodedMessage);
});
