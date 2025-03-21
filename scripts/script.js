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
  const fragment = window.fragment;
  const params = new URLSearchParams(fragment);

  if(vid1El) {
    const storage = window.localStorage;
    const player = videojs(vid1El);
    if (self !== parent) {
      player.logo({
        image: 'android-chrome-192x192.png',
        url: window.location.href,
        position: 'top-left',
        width: 48,
        height: 48,
        opacity: 1.0,
        fadeDelay: null
      });  
    }
    player.on('volumechange', function(ev) {
      const vol = player.volume();
      storage.setItem('hinatacampaign-vid1-volume', vol.toString());
    });
    player.volume(Number(storage.getItem('hinatacampaign-vid1-volume') ?? 0.8));
    if(params.has('lang')) {
      player.language = params.get('lang');
    }

    player.chromecast();
  }

  document.querySelectorAll(".hide-first").forEach(e => e.classList.remove('hide-first'));
});