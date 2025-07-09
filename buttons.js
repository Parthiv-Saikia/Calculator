document.querySelectorAll(".button").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const circle = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(this.clientWidth, this.clientHeight);
    circle.classList.add("ripple");
    circle.style.width = circle.style.height = size + "px";
    circle.style.left = e.clientX - rect.left - size / 2 + "px";
    circle.style.top = e.clientY - rect.top - size / 2 + "px";

    const old = this.querySelector("span.ripple");
    if (old) old.remove();

    this.appendChild(circle);
  });
});
