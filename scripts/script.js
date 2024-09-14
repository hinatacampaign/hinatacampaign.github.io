document.addEventListener("DOMContentLoaded", (event) => {
  if (self === parent) {
    document.querySelector("body").classList.add("self");
  } else {
    document.querySelector("body").classList.add("child");
  }

  const playerEl = document.querySelector('#vid1');
  const player = videojs.getPlayer(playerEl);

  if (player) {
    player.on('play', function () {
      playerEl.removeChild(document.querySelector('.vjs-poster'));
    });
  }

  document.querySelectorAll(".hide-first").forEach(e => e.classList.remove('hide-first'));
});