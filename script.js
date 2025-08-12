const dots = document.querySelectorAll(".dot");
const slideWrapper = document.querySelector(".slide-wrapper");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    slideWrapper.style.transform = `translateX(-${index * 100}%)`;

    // Atualiza o estado ativo
    dots.forEach((d) => d.classList.remove("active"));
    dot.classList.add("active");
  });
});

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

document.getElementsByClassName('about-form').addEventListener('submit', function(e){
  e.preventDefault();

  const btn = document.getElementById('btnSubmit');
  const form = e.target;

  btn.disabled = true;
  btn.textContent = 'Enviando...';
  btn.style.backgroundColor = ''; // deixa a cor normal enquanto envia
  btn.style.color = 'white';      // mantém o texto branco

  fetch('enviar.php', {
    method: 'POST',
    body: new FormData(form)
  }).then(response => response.text())
    .then(text => {
      if(text.toLowerCase().includes('sucesso')){
        btn.textContent = 'Enviado!';
        btn.style.backgroundColor = '#4bb543';
        btn.style.color = 'white';
      } else {
        btn.textContent = text; // mensagem de erro
        btn.style.backgroundColor = '#cc0000';
        btn.style.color = 'white';
        btn.disabled = false;
      }
    }).catch(() => {
      btn.textContent = 'Erro no envio, tente novamente.';
      btn.style.backgroundColor = '#cc0000';
      btn.style.color = 'white';
      btn.disabled = false;
    });
});


