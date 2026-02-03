const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const smallText = document.getElementById("smallText");
const heroGif = document.getElementById("heroGif");

const lines = [
  "Hmm... maybe not?",
  "Think again...",
  "Are you absolutely sure?",
  "I knew you would say yes..!",
];

const gifSteps = [
  "assets/1.gif",
  "assets/2.gif",
  "assets/3.gif",
  "assets/4.gif",
  "assets/5.gif"
];

let noClicks = 0;
const maxNoClicks = 4;

noBtn.addEventListener("click", () => {
  noClicks += 1;

  document.body.classList.add("screen-shake");
  setTimeout(() => {
    document.body.classList.remove("screen-shake");
  }, 220);

  const burst = document.createElement("div");
  burst.className = "x-burst";
  document.body.appendChild(burst);

  const count = 6;
  for (let i = 0; i < count; i += 1) {
    const mark = document.createElement("span");
    mark.className = "x-mark";
    mark.textContent = "x";
    mark.style.left = `${30 + Math.random() * 40}%`;
    mark.style.animationDelay = `${Math.random() * 0.12}s`;
    burst.appendChild(mark);
  }

  setTimeout(() => {
    burst.remove();
  }, 700);

  const yesScale = 1 + noClicks * 0.2;
  const noScale = Math.max(0.1, 1 - noClicks * 0.22);

  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${noScale})`;

  if (heroGif) {
    const gifIndex = Math.min(noClicks, gifSteps.length - 1);
    heroGif.src = gifSteps[gifIndex];
  }

  const sarcasmLine = lines[Math.min(noClicks - 1, lines.length - 1)];
  smallText.textContent = sarcasmLine;
  smallText.classList.remove("initial");

  if (noClicks >= maxNoClicks) {
    noBtn.classList.add("hidden");
    yesBtn.style.transform = "scale(1.9)";
    if (heroGif) {
      heroGif.src = gifSteps[gifSteps.length - 1];
    }
    smallText.textContent = "I knew you’d say yes!!!";
  }
});

yesBtn.addEventListener("click", () => {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  document.body.appendChild(confetti);

  const colors = ["#ff5f8f", "#ff8fb1", "#ffd166", "#9bf6ff", "#c3f0ca"];
  const pieces = 80;

  for (let i = 0; i < pieces; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.appendChild(piece);
  }

  setTimeout(() => {
    window.location.href = "memories.html";
  }, 1200);
});
