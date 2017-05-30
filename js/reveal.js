// Elements reveal
if ($(window).width() >= 768) {
    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'top'
    });
}
sr.reveal('.about-right', {
    duration: 2000,
    origin: 'right',
    distance: '10px'
});
sr.reveal('.about-btn', {
    duration: 1500,
    delay: 1000,
    origin: 'right'
});
sr.reveal('.info-info', {
    duration: 2000,
    origin: 'top',
    viewFactor: 0.2
});
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '10px',
    viewFactor: 0.2
});
sr.reveal('.info-left', {
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
