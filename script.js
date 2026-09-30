// 1. Navigation Between Pages
function navigateTo(targetPageId) {
  const activePage = document.querySelector('.page-screen.active');
  const targetPage = document.getElementById(targetPageId);

  if (activePage) {
    activePage.classList.remove('active');
  }
  targetPage.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2. Realistic Envelope Open Animation
function handleOpenEnvelope() {
  const wrapper = document.getElementById('envelopeWrapper');
  wrapper.classList.add('open');

  // Waits 1 second for the flap and letter slide up before switching to page 2
  setTimeout(() => {
    navigateTo('page-main');
  }, 1000);
}

// 3. Carousel Component Logic
let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
  const track = document.getElementById('carouselTrack');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  const dots = document.querySelectorAll('.carousel-dots .dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

function moveCarousel(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function setSlide(index) {
  currentSlide = index;
  updateCarousel();
}

// Auto-slide every 4.5 seconds
setInterval(() => {
  moveCarousel(1);
}, 4500);

// 4. GCash Modal Controls
function toggleGcashModal(show) {
  const modal = document.getElementById('gcashModal');
  if (show) {
    modal.classList.add('open');
  } else {
    modal.classList.remove('open');
  }
}

function copyNumber() {
  const num = document.getElementById('gcashNumber').innerText;
  navigator.clipboard.writeText(num).then(() => {
    alert("GCash number copied!");
  });
}

// 5. RSVP Form Preview Handler
function handleFormPreview(e) {
  e.preventDefault();
  alert("RSVP submitted in preview mode! (Ready for Google Sheets connection whenever you want).");
}
