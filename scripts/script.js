if (self === parent) {
  document.querySelector("body").classList.add("self");
} else {
  document.querySelector("body").classList.add("child");
}

document.querySelectorAll(".hide-first").forEach(e => e.classList.remove('hide-first'));