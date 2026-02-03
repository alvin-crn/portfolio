$(function () {
  let currentIndex = 0;
  const $slides = $('.carousel-slide');
  const slideCount = $slides.length;

  function updateCarousel() {
    $('.carousel-track').css('transform', `translateX(-${currentIndex * 100}%)`);
  }

  $('.carousel-arrow.right').on('click', function () {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
  });

  $('.carousel-arrow.left').on('click', function () {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
  });
});