$(function() {
  $('.education-card').on('click', function(e) {
    if ($(e.target).is('a, a *')) return;

    const $card = $(this);
    const $detail = $card.find('.education-detail');
    const $icon = $card.find('.education-toggle i');

    $detail.toggleClass('open');
    $icon.toggleClass('fa-chevron-down fa-chevron-up');
  });
});