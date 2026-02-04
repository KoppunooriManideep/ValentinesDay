const bgMusic = document.getElementById("bgMusic");
const heartsContainer = document.querySelector(".hearts");

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

const messageEl = document.querySelector(".message");
if (messageEl) {
  const fullText = messageEl.textContent.trim().replace(/\s+/g, " ");
  let index = 0;
  messageEl.textContent = "";

  const step = () => {
    messageEl.textContent = fullText.slice(0, index);
    index += 1;
    if (index <= fullText.length) {
      setTimeout(step, 45);
    }
  };

  setTimeout(step, 300);
}
