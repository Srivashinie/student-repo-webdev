// Add your code here
let image = document.createElement("img");
let bio = document.createElement("p");
let container = document.querySelector("main");

image.style.display = "block";
image.style.margin = "0 auto";
image.style.borderRadius = "50%";
image.src = "../images/Intro.jpeg";
image.alt = "Headshot of Srivashinie";
image.style.width = "200px";

bio.innerHTML =
  "Hello!! I am Srivashinie,a graduate student from India.I have worked on small web application during my undergraduate and have knowldege about basic HTML,CSS and Javascript. I enjoy reading books, watching movies,cooking and trying new activicties. I am exited and happy to be here!";
bio.style.margin = "20px auto";
bio.style.width = "300px";
bio.classList.add("bio");

container.appendChild(image);
container.appendChild(bio);
