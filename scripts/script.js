document.addEventListener("DOMContentLoaded", (event) => {
  if (self === parent) {
    document.querySelector("body").classList.add("self");
  } else {
    document.querySelector("body").classList.add("child");
  }

  console.log("DOM loaded");
  setTimeout(() => {
    document
      .querySelectorAll(
        ".vjs-poster, .vjs-loading-spinner, .vjs-big-play-button"
      )
      .forEach((e) => e.remove());
  }, 2000);

  const vid1El = document.querySelector('#vid1');
  if(vid1El) {
    const storage = window.localStorage;
    const player = videojs.getPlayer(vid1El);
    player.on('volumechange', function(ev) {
      const vol = ev.target.player.volume();
      storage.setItem('hinatacampaign-vid1-volume', vol.toString());
    });
    player.volume(Number(storage.getItem('hinatacampaign-vid1-volume') ?? 0.8));
  }

  document.querySelectorAll(".hide-first").forEach(e => e.classList.remove('hide-first'));
});