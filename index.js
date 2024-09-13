const images = document.getElementsByClassName("hover_img");
const dynamic = document.getElementsByClassName("dynamic");

// Gestion du premier clique pour "scroller" les images
const track = document.getElementById("dragable_content");

// Gestion du hover sur les images
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    dynamic[0].src = images[i].src;
  });
}

// Récupération de la valeur de la position de la souris
window.onmousedown = function (e) {
  track.dataset.mouseDownAt = e.clientY;
};

window.onmouseup = function (e) {
  track.dataset.mouseDownAt = 0;
  track.dataset.prevPercentage = track.dataset.percentage;
};

window.onmousemove = function (e) {
  if (track.dataset.mouseDownAt === "0") return;

  const delta = parseFloat(track.dataset.mouseDownAt) - e.clientY;
  const maxDelta = window.innerHeight / 2;

  const percentage = (delta / maxDelta) * -100;

  const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

  const min = -50;
  const max = 50;

  const limited = Math.max(min, Math.min(nextPercentage, max));

  const limitedPercentage = Math.max(min, Math.min(nextPercentage, max));

  for (let i = 0; i < images.length; i++) {
    images[i].style.objectPosition = `0% ${limitedPercentage}%`;
  }

  track.dataset.percentage = nextPercentage;
  track.style.transform = `translate(0%, -${limited}%)`;
};
