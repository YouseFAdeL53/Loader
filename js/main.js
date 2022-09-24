
window.onload = function () {
  let loader = document.getElementById("load");
  document.body.style.overflow = "hidden";

  setTimeout(function () {
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    loader.style.transition = "1.5s";
    document.body.style.overflow = "auto";
  }, 3000)
}
