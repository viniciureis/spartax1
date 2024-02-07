let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");

  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  const translateValue = -currentIndex * 100 + "%";
  slider.style.transform = `translateX(${translateValue})`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Iniciar o slider automaticamente
setInterval(nextSlide, 5000);