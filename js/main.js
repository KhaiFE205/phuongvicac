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

  // Tự động chuyển slide mỗi 4 giây
  setInterval(() => {
    showSlide(slideIndex + 1);
  }, 4000);
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

slides.forEach(src => {
  const img = new Image();
  img.src = src;
});


// khóa học

  let quantity = 1;
  const qtyDisplay = document.getElementById("qty");

  function increase() {
    quantity++;
    qtyDisplay.textContent = quantity;
  }

  function decrease() {
    if (quantity > 1) {
      quantity--;
      qtyDisplay.textContent = quantity;
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('mainImage');
  const thumbs = document.querySelectorAll('.thumb');
  const thumbSlider = document.getElementById('thumbSlider');
  const prevBtn = document.querySelector('.thumb-prev');
  const nextBtn = document.querySelector('.thumb-next');

  let currentThumb = 0;

  // Click vào ảnh nhỏ đổi ảnh lớn
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      mainImage.src = thumb.src;
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      currentThumb = i;
    });
  });

  // Chuyển slider nhỏ sang trái/phải
  prevBtn.addEventListener('click', () => {
    thumbSlider.scrollBy({ left: -80, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    thumbSlider.scrollBy({ left: 80, behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  const underline = document.querySelector('.tab-underline');

  function updateUnderline() {
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn && underline) {
      underline.style.width = activeBtn.offsetWidth + 'px';
      underline.style.transform = `translateX(${activeBtn.offsetLeft}px)`;
    }
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
      document.getElementById(this.dataset.tab).classList.add('active');
      updateUnderline();
    });
  });

  updateUnderline();
  window.addEventListener('resize', updateUnderline);
});



document.addEventListener('DOMContentLoaded', function () {
  // Xem thêm/Đóng cho sản phẩm bán chạy
  const moreBtn = document.querySelector('.tintuc-more-btn');
  const closeBtn = document.querySelector('.tintuc-close-btn');
  const hiddenItems = document.querySelectorAll('.tintuc-item.hidden');

  if (moreBtn && closeBtn && hiddenItems.length > 0) {
    moreBtn.addEventListener('click', function () {
      hiddenItems.forEach(item => item.style.display = 'block');
      moreBtn.style.display = 'none';
      closeBtn.style.display = 'inline-block';
    });

    closeBtn.addEventListener('click', function () {
      hiddenItems.forEach(item => item.style.display = '');
      moreBtn.style.display = 'inline-block';
      closeBtn.style.display = 'none';
    });
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.sort-dropdown');
  if (!dropdown) return;
  var toggle = dropdown.querySelector('.dropdown-toggle');
  var menu = dropdown.querySelector('.dropdown-menu');
  var hiddenInput = dropdown.querySelector('input[type="hidden"]');
  var items = menu.querySelectorAll('li');

  // Toggle menu
  toggle.onclick = function(e) {
    dropdown.classList.toggle('open');
  };

  // Click outside to close
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });

  // Select item
  items.forEach(function(item) {
    item.onclick = function() {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      toggle.textContent = item.textContent;
      hiddenInput.value = item.getAttribute('data-value');
      dropdown.classList.remove('open');
    };
  });

  // Set default active
  items[0].classList.add('active');
});