let ul = document.querySelector("ul");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  ul.classList.toggle("open");
  hamburger.classList.toggle("active");
  document.querySelectorAll("nav ul li").forEach((li) => {
    console.log(li.textContent);
    li.addEventListener("click", () => {
      ul.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });
});

let form = document.querySelector("form");

form.addEventListener("submit", () => {
  let name = document.querySelector("#name").value;
  let message = document.querySelector("#message").value;
  let finalMessage = `Hello, My name is ${name}. ${message}`;
  const encodedMessage = encodeURIComponent(message);
  console.log(encodedMessage);
});
