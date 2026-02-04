$(function () {
    // Toggle menu full screen
    $('.nav-toggle').on('click', function () {
        $('.nav-links').toggleClass('show');
        $('body').toggleClass('menu-open');
    });

    // Dropdown projets
    $('.dropdown-toggle').on('click', function () {
        $(this).parent('.dropdown').toggleClass('open');
    });

    // Fermer le menu quand on clique sur un lien
    $('.nav-links a').on('click', function () {
        $('.nav-links').removeClass('show');
        $('.dropdown').removeClass('open');
        $('body').removeClass('menu-open');
    });
});