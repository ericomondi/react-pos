const toggleContainer = (function () {
  function toggle() {
    var container = document.querySelector(".my-container");
    if (container) {
      if (
        container.style.display === "none" ||
        container.style.display === ""
      ) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    }
  }

  // Initially hide the container on small screens
  function checkScreenSize() {
    var container = document.querySelector(".my-container");
    if (container) {
      if (window.innerWidth <= 768) {
        container.style.display = "none";
      } else {
        container.style.display = "block";
      }
    }
  }

  // Check screen size on load and on resize
  window.addEventListener("load", checkScreenSize);
  window.addEventListener("resize", checkScreenSize);

  return toggle;
})();

export default toggleContainer;
