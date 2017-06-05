// Elements reveal
if ($(window).width() >= 768) {
    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'top'
    });
}
sr.reveal('.landing-info', {
    duration: 2000,
    origin: 'right',
    distance: '10px'
});
sr.reveal('.landing-btn-1', {
    duration: 1000,
    delay: 1000,
    origin: 'right'
});
sr.reveal('.landing-btn-2', {
    duration: 1000,
    delay: 1300,
    origin: 'right'
});
sr.reveal('.landing-btn-3', {
    duration: 1000,
    delay: 1600,
    origin: 'right'
});
sr.reveal('.about-info', {
    duration: 2000,
    origin: 'top',
    viewFactor: 0.2
});
sr.reveal('.about-right', {
    duration: 2000,
    origin: 'right',
    distance: '10px',
    viewFactor: 0.2
});
sr.reveal('.about-left', {
    duration: 2000,
    origin: 'left',
    distance: '10px',
    viewFactor: 0.2
});
sr.reveal('.avatar', {
    duration: 2000,
    origin: 'bottom',
    distance: '10px',
    viewFactor: 0.2
});
