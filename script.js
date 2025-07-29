const slideGroups = document.querySelectorAll(".slide-group");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
  if (index === currentSlide) return;

  // Esconde slide atual
  const current = slideGroups[currentSlide];
  current.classList.remove("active");

  // Aguarda transição antes de mostrar o próximo
  setTimeout(() => {
    slideGroups.forEach((group, i) => {
      group.classList.toggle("active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentSlide = index;
  }, 300); // tempo menor que o do CSS (0.5s)
}

// Eventos nas bolinhas
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// Slide inicial
showSlide(0);

document.addEventListener("DOMContentLoaded", function () {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    // Cria o ícone + e insere no botão
    const icon = document.createElement("span");
    icon.classList.add("faq-icon");
    icon.textContent = "+";
    question.appendChild(icon);

    const answer = question.nextElementSibling;

    question.addEventListener("click", function () {
      const icon = this.querySelector(".faq-icon");

      if (!answer.classList.contains("active")) {
        answer.classList.add("active");
        icon.textContent = "−";
      } else {
        // Adiciona um ouvinte único para a transição terminar
        const onTransitionEnd = () => {
          icon.textContent = "+";
          answer.removeEventListener("transitionend", onTransitionEnd);
        };

        answer.addEventListener("transitionend", onTransitionEnd);
        answer.classList.remove("active");
      }
    });
  });
});
