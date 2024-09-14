if (self === parent) {
  document.querySelector("body").classList.add("self");
} else {
  document.querySelector("body").classList.add("child");
}

const player = videojs.getPlayer(document.querySelector('#vid1'));

if (player) {
  player.addEventListener('play', function () { this.poster = null; });
}

document.querySelectorAll(".hide-first").forEach(e => e.classList.remove('hide-first'));