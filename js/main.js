let slideIndex = 0;
const slides = ["img/bannerr1.png", "img/bannerr2.png", "img/bannerr3.png"]; // link ảnh
const imgEl = document.querySelector('.banner-image');

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

document.querySelector('.prev').onclick = () => showSlide(slideIndex - 1);
document.querySelector('.next').onclick = () => showSlide(slideIndex + 1);
document.querySelectorAll('.dot').forEach((dot, i) => {
  dot.onclick = () => showSlide(i);
});

showSlide(0);



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
backdrop.addEventListener('click', (e) => {
  // Nếu click không nằm trong nav thì mới đóng menu
  if (!nav.contains(e.target)) {
    nav.classList.remove('open');
    backdrop.classList.remove('active');
  }
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


const moreBtn = document.querySelector('.tintuc-more-btn');
const closeBtn = document.querySelector('.tintuc-close-btn');
const allItems = document.querySelectorAll('.tintuc-item');

moreBtn.addEventListener('click', function() {
  const hiddenItems = document.querySelectorAll('.tintuc-item.hidden');
  for (let i = 0; i < 3 && i < hiddenItems.length; i++) {
    hiddenItems[i].classList.remove('hidden');
  }
  // Nếu không còn tin nào ẩn thì ẩn nút "Xem thêm", hiện nút "Đóng"
  if (document.querySelectorAll('.tintuc-item.hidden').length === 0) {
    moreBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  }
});

closeBtn.addEventListener('click', function() {
  // Ẩn lại các tin từ số 4 trở đi
  allItems.forEach((item, idx) => {
    if (idx >= 3) item.classList.add('hidden');
  });
  closeBtn.style.display = 'none';
  moreBtn.style.display = 'inline-block';
});