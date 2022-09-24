// $(document).ready(function () {
//   $(".navbar-nav .nav-link").click(function () {
//     $(this).addClass("active").parent().siblings().find(".nav-link").removeClass("active");
//   })
// });


// let changeicon = function (icon) {
//   icon.classList.toggle("fa-times");
// };


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