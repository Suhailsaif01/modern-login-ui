// Smooth button click feedback
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.97)";
    setTimeout(() => btn.style.transform = "scale(1)", 150);
  });
});
