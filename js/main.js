let slideIndex = 0;
const slides = ["img/bannerr1.png", "img/bannerr2.png", "img/bannerr3.png"]; // link ảnh
const imgEl = document.querySelector('.banner-image');
if (imgEl) {
  function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;
    else slideIndex = index;
    imgEl.src = slides[slideIndex];
    updateDots();
  }

  function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === slideIndex);
    });
  }

  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  if (prevBtn) prevBtn.onclick = () => showSlide(slideIndex - 1);
  if (nextBtn) nextBtn.onclick = () => showSlide(slideIndex + 1);

  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.onclick = () => showSlide(i);
  });

  showSlide(0);
}



const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
let backdrop = document.querySelector('.menu-backdrop');
if (!backdrop) {
  backdrop = document.createElement('div');
  backdrop.className = 'menu-backdrop';
  document.body.appendChild(backdrop);
}

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  backdrop.classList.toggle('active', nav.classList.contains('open'));
});
backdrop.addEventListener('click', () => {
  nav.classList.remove('open');
  backdrop.classList.remove('active');
});
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    // Nếu link KHÔNG phải là menu cha có submenu thì mới đóng menu
    if (!link.parentElement.classList.contains('has-submenu')) {
      nav.classList.remove('open');
      backdrop.classList.remove('active');
    }
  });
});
document.querySelectorAll('.has-submenu > a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle('open');
    }
  });
});
