const buttonsContainer = document.getElementById("buttons");

buttonsContainer.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("btn")) {
    stopAllSounds();
    const soundId = target.getAttribute("data-sound");
    const audio = document.getElementById(soundId);
    if (audio) {
      audio.play();
    }
  }

  if (target.classList.contains("stop")) {
    stopAllSounds();
  }
});

function stopAllSounds() {
  const audios = document.querySelectorAll("audio");
  audios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}
