const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const smallText = document.getElementById("smallText");
const heroGif = document.getElementById("heroGif");
const heartsContainer = document.querySelector(".hearts");

const lines = [
  "Hmm... maybe not? 🤭",
  "Think again... 🥺",
  "Are you absolutely sure? 👀",
  "It's your last chance. 😘"
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
    smallText.textContent = "I knew you'd say yes!!! 😎";
  }
});

yesBtn.addEventListener("click", () => {
  document.body.classList.add("fade-out");
  setTimeout(() => {
    window.location.href = "celebration.html";
  }, 350);
});
