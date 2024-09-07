const images = document.getElementsByClassName("hover_img");
const dynamic = document.getElementsByClassName("dynamic");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    dynamic[0].src = images[i].src;
  });
}

// Gestion du premier clique pour "scroller" les images
const track = document.getElementById("dragable_content");
window.onmousedown = function (e) {
  track.dataset.mouseDownAt = e.clientY;
};

window.onmouseup = function (e) {
  track.dataset.mouseDownAt = 0;
  track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousemove = function (e) {
  if (track.dataset.mouseDownAt === "0") return;
  const delta = parseFloat(track.dataset.mouseDownAt) - e.clientY,
    maxDelta = window.innerHeight / 2;

  const percentage = (delta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  console.log(nextPercentage);
  track.dataset.percentage = nextPercentage;
  track.style.transform = `translate(0%, ${nextPercentage}%)`;
};
