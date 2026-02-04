$(function () {
  $('.experience-card').on('click', function() {
    const $card = $(this);
    const $detail = $card.find('.experience-detail');
    const $icon = $card.find('.experience-toggle i');

    $detail.toggleClass('open');
    $icon.toggleClass('fa-chevron-down fa-chevron-up');
  });
});