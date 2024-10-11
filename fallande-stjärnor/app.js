let animation;

document.querySelector('.button').addEventListener('click', function () {
    if (!animation) {
        animation = anime({
            targets: '.circle',
            translateY: '50rem',
            duration: 500,
            delay: anime.stagger(100),
            easing: 'linear',
            loop: true,
        });
    }
})