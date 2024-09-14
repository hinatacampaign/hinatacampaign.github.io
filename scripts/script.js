document.addEventListener("DOMContentLoaded", (event) => {
  if (self === parent) {
    document.querySelector("body").classList.add("self");
  } else {
    document.querySelector("body").classList.add("child");
  }

  document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM loaded");
    setTimeout(() => {
      document
        .querySelectorAll(
          ".vjs-poster, .vjs-loading-spinner, .vjs-big-play-button"
        )
        .forEach((e) => e.remove());
    }, 2000);
  });

  document.querySelectorAll(".hide-first").forEach(e => e.classList.remove('hide-first'));
});