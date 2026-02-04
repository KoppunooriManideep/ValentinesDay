const bgMusic = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");
const typewriter = document.getElementById("typewriter");

const navigationEntry = performance.getEntriesByType("navigation")[0];
const navigationType = navigationEntry ? navigationEntry.type : undefined;
if (navigationType === "reload" || (performance.navigation && performance.navigation.type === 1)) {
  window.location.replace("index.html");
}


const ensureMusic = async () => {
  if (!bgMusic) return;
  if (!bgMusic.paused) return;
  try {
    await bgMusic.play();
  } catch (error) {
    // Autoplay may be blocked until user taps.
  }
};

if (bgMusic) {
  ensureMusic();
  document.addEventListener("click", ensureMusic, { once: true });
}

if (heartsContainer) {
  const heartCount = 18;
  for (let i = 0; i < heartCount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.animationDuration = `${6 + Math.random() * 6}s`;
    heart.style.opacity = `${0.4 + Math.random() * 0.4}`;
    heart.style.transform = `translateY(${100 + Math.random() * 30}vh) rotate(45deg)`;
    heartsContainer.appendChild(heart);
  }
}

if (typewriter) {
  const message = "Our cutest moment.. ✨";
  let index = 0;
  let direction = 1;

  const step = () => {
    typewriter.textContent = message.slice(0, index);

    if (direction === 1 && index >= message.length) {
      direction = -1;
      setTimeout(step, 900);
      return;
    }

    if (direction === -1 && index <= 0) {
      direction = 1;
      setTimeout(step, 300);
      return;
    }

    index += direction;
    setTimeout(step, direction === 1 ? 70 : 40);
  };

  setTimeout(step, 300);
}
