const boxes = document.querySelectorAll(".box");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;

    if (top < trigger) {
      box.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);