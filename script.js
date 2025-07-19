const slideGroups = document.querySelectorAll(".slide-group");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slideGroups.forEach((group, i) => {
    group.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Ativar o primeiro grupo ao carregar
showSlide(0);
