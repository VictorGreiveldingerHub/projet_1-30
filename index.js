const images = document.getElementsByClassName("hover_img");
const dynamic = document.getElementsByClassName("dynamic");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    dynamic[0].src = images[i].src;
  });
}
