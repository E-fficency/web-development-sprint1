const stickySections = document.querySelectorAll('.sticky');

window.addEventListener('scroll', (e) => {
  stickySections.forEach((section) => {
    transform(section);
  });
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll-section');
  let porcentagem = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  porcentagem = porcentagem < 0? 0 : porcentagem > 400? 400 : porcentagem;
  scrollSection.style.transform = `translate3d(${-(porcentagem)}vw, 0, 0)`;
}