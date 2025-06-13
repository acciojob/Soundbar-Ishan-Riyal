//your JS code here. If required.
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong", "stop"];

const buttonsContainer = document.getElementById("buttons");

sounds.forEach((sound) => {
  const buttonHTML =
    sound === "stop"
      ? `<button class="stop">${sound}</button>`
      : `<button class="btn" data-sound="${sound}">${sound}</button>`;

  buttonsContainer.insertAdjacentHTML("beforeend", buttonHTML);
});

buttonsContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("btn")) {
    stopSounds();
    const sound = target.getAttribute("data-sound");
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
    window.currentAudio = audio;
  }

  if (target.classList.contains("stop")) {
    stopSounds();
  }
});

function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}
