const buttonsContainer = document.getElementById("buttons");

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

// Stop currently playing sound
function stopSounds() {
  if (window.currentAudio) {
    window.currentAudio.pause();
    window.currentAudio.currentTime = 0;
  }
}
