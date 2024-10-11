let animation;

document.querySelector('.button').addEventListener('click', function () {
    if (!animation) {
        animation = anime({
            targets: '.name-svg path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuad',
            duration: 4000,
        })
    }
})