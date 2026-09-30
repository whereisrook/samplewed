// 1. Navigation Controller
function navigateTo(pageId) {
  const activePage = document.querySelector('.page-view.active');
  const targetPage = document.getElementById(pageId);

  if (activePage) {
    activePage.classList.remove('active');
  }
  
  targetPage.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// 2. Envelope 3D Open Interaction
function unsealEnvelope() {
  const envelope = document.getElementById('envelope3D');
  envelope.classList.add('unsealed');

  // Smooth cinematic delay before revealing the full site
  setTimeout(() => {
    navigateTo('page-main');
  }, 1300);
}

// 3. Full-Screen Hero Carousel (Wedvite Style)
let activeIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator-bar');
const totalSlides = slides.length;
let autoCarouselTimer;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active-slide', i === index);
  });

  indicators.forEach((bar, i) => {
    bar.classList.toggle('active', i === index);
  });

  activeIndex = index;
}

function shiftSlide(direction) {
  let nextIndex = (activeIndex + direction + totalSlides) % totalSlides;
  showSlide(nextIndex);
  resetTimer();
}

function resetTimer() {
  clearInterval(autoCarouselTimer);
  autoCarouselTimer = setInterval(() => {
    shiftSlide(1);
  }, 5500);
}

// Start auto rotation
resetTimer();

// 4. GCash Modal Controls
function toggleGcash(state) {
  const modal = document.getElementById('gcashModal');
  if (state) {
    modal.classList.add('open');
  } else {
    modal.classList.remove('open');
  }
}

function copyGcash() {
  const number = document.getElementById('gcashNumText').innerText;
  navigator.clipboard.writeText(number).then(() => {
    alert("GCash number copied!");
  });
}
