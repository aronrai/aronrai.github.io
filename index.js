const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const starGeometry = new THREE.BufferGeometry();
const starCount = 5000;
const positions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 2000;
}
starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 1,
  sizeAttenuation: true,
});
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);
camera.position.z = 500;
function animate() {
  requestAnimationFrame(animate);
  stars.rotation.x += 0.001;
  stars.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
function showabout() {
  $("#about_container").css("display", "inherit");
  $("#about_container").addClass("animated slideInLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideInLeft");
  }, 800);
  document.querySelector("#hide-on-sec").style.visibility = "hidden";
}
function closeabout() {
  $("#about_container").addClass("animated slideOutLeft");
  setTimeout(function () {
    $("#about_container").removeClass("animated slideOutLeft");
    $("#about_container").css("display", "none");
  }, 800);
  setTimeout(function () {
  document.querySelector("#hide-on-sec").style.visibility = "visible";
  }, 500);
}
function showprojects() {
  $("#projects_container").css("display", "inherit");
  $("#projects_container").addClass("animated slideInRight");
  setTimeout(function () {
    $("#projects_container").removeClass("animated slideInRight");
  }, 800);
  document.querySelector("#hide-on-sec").style.visibility = "hidden";
}
function closeprojects() {
  $("#projects_container").addClass("animated slideOutRight");
  setTimeout(function () {
    $("#projects_container").removeClass("animated slideOutRight");
    $("#projects_container").css("display", "none");
  }, 800);
  setTimeout(function () {
  document.querySelector("#hide-on-sec").style.visibility = "visible";
  }, 500);
}
function showcontact() {
  $("#contact_container").css("display", "inherit");
  $("#contact_container").addClass("animated slideInUp");
  setTimeout(function () {
    $("#contact_container").removeClass("animated slideInUp");
  }, 800);
  document.querySelector("#hide-on-sec").style.visibility = "hidden";
}
function closecontact() {
  $("#contact_container").addClass("animated slideOutDown");
  setTimeout(function () {
    $("#contact_container").removeClass("animated slideOutDown");
    $("#contact_container").css("display", "none");
  }, 800);
  setTimeout(function () {
  document.querySelector("#hide-on-sec").style.visibility = "visible";
  }, 500);
}