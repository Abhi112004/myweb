
function disableScroll(e) {
    e.preventDefault(); 
  }
  function pop() {
    document.getElementById("popOuter").style.display = "none";
    window.removeEventListener("wheel", disableScroll, { passive: false });
  }
  function lode() {
    document.getElementById("popOuter").style.display = "block";
    window.addEventListener("wheel", disableScroll, { passive: false });
  }
  var btn = document.getElementById("top");
  function up() {
    if (document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  function topbtn() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.onscroll = up;