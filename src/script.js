// Navegação Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Flip nos Cards ao Clicar
document.querySelectorAll('.empresa-card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.card').classList.toggle('flipped');
  });
});

// Menu Responsivo
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Alterna a classe 'open' no menu ao clicar no botão de menu
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Fecha o menu responsivo ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// FAQ - Abrir/Fechar Respostas
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    // Alterna entre abrir e fechar a resposta
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    // Alterna o ícone da questão
    question.querySelector('i').classList.toggle('fa-chevron-down');
    question.querySelector('i').classList.toggle('fa-chevron-up');
  });
});
