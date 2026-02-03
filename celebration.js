const heartsContainer = document.querySelector(".hearts");
const celebrateSound = document.getElementById("celebrateSound");

const confetti = document.createElement("div");
confetti.className = "confetti";
document.body.appendChild(confetti);

if (celebrateSound) {
  celebrateSound.volume = 0.6;
  celebrateSound.play().catch(() => {
    // Autoplay may be blocked until user taps.
  });
}

const colors = ["#ff5f8f", "#ff8fb1", "#ffd166", "#9bf6ff", "#c3f0ca"];
const pieces = 90;

for (let i = 0; i < pieces; i += 1) {
  const piece = document.createElement("span");
  piece.className = "confetti-piece";
  piece.style.left = `${Math.random() * 100}%`;
  piece.style.background = colors[i % colors.length];
  piece.style.animationDelay = `${Math.random() * 0.3}s`;
  piece.style.transform = `rotate(${Math.random() * 360}deg)`;
  confetti.appendChild(piece);
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

setTimeout(() => {
  window.location.href = "memories.html";
}, 3000);
