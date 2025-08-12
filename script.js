document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector("nav ul");
  const overlay = document.getElementById("overlay");

  toggle.addEventListener("click", function () {
    const isActive = navList.classList.toggle("active");
    overlay.style.display = isActive ? "block" : "none";
    toggle.textContent = isActive ? "✕" : "☰";
  });

  overlay.addEventListener("click", function () {
    navList.classList.remove("active");
    overlay.style.display = "none";
    toggle.textContent = "☰";
  });
});