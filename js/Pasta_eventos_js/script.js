let lastScrollTop = 0;
const header = document.querySelector(".nav-extended");
console.log(header);
window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    header.style.position = 'relative'; // Adiciona a classe 'hidden' se o scroll for para baixo
  } else {
    header.style.position = 'fixed'; // Remove a classe 'hidden' se o scroll for para cima
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});