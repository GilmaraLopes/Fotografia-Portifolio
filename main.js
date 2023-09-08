// Adicione este código no seu script.js para inicializar o Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation:{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// function ativacaoMenu() {
//   const ativaMenu = document.querySelector('.fa-bars');
//   const navMenu = document.querySelector('header .container')


//   ativaMenu.addEventListener('click', () => {
//     ativaMenu.classList.toggle('fa-x')
//     navMenu.classList.toggle('ativado')
//   })
// }

// ativacaoMenu()
