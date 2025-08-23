// const sakuraImages = [
//   "{% static 'sakura/sakura-0.png' %}",
//   "{% static 'sakura/sakura-1.png' %}",
//   "{% static 'sakura/sakura-2.png' %}",
//   "{% static 'sakura/sakura-3.png' %}",
//   "{% static 'sakura/sakura-4.png' %}",
//   "{% static 'sakura/sakura-5.png' %}"
// ];

const MIN_DURATION = 8000; // 8 sec (slows it down)
const MAX_DURATION = 16000; // 16 sec

function createSakura() {
  const img = document.createElement("img");
  img.className = "snowfall-flakes";
  img.src = sakuraImages[Math.floor(Math.random() * sakuraImages.length)];

  // Random size
  const size = 10 + Math.random() * 40; // 10–50px
  img.style.width = `${size}px`;
  img.style.height = `${size}px`;

  // Random start position and rotation
  const startX = Math.random() * window.innerWidth;
  img.style.left = `${startX}px`;
  img.style.top = `-${size}px`;
  img.style.transform = `rotate(${Math.random() * 360}deg)`;

  // Random z-index (deeper leaves behind)
  img.style.zIndex = Math.floor(Math.random() * 3) - 2;

  document.querySelector(".sakura-container").appendChild(img);

  // Animate falling
  const duration = MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION);
  const start = Date.now();

  function animate() {
    const elapsed = Date.now() - start;
    const progress = elapsed / duration;

    if (progress < 1) {
      img.style.top = `${progress * window.innerHeight}px`;
      img.style.left = `${startX + Math.sin(progress * 10) * 20}px`;
      requestAnimationFrame(animate);
    } else {
      img.remove();
    }
  }
  animate();
}

// Generates a sakura every 500ms
setInterval(createSakura, 500);