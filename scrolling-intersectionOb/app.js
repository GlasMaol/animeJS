const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            slideIn(entry.target);
        } else {
            slideOut(entry.target);
        }
    })
});

let hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => {
    observer.observe(element);
})

const h1Observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('landing-title')) {
                fadeIn(entry.target);
            } else if (entry.target.classList.contains('slide-from-left')) {
                slideInFromLeft(entry.target);
            } else if (entry.target.classList.contains('fade-in')) {
                fadeIn(entry.target);
            } else if (entry.target.classList.contains('slide-in-from-right')) {
                slideInFromRight(entry.target);
            }
        }
    });
});

let h1Elements = document.querySelectorAll('section h1, footer h1');
h1Elements.forEach((h1) => {
    h1Observer.observe(h1);
})

anime({
    targets: '.figure-section-one path',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 4000,
    easing: 'easeOutQuad',
    loop: true,
    direction: 'alternate',
    delay: function (el, i, l) {
        return (l - i) * 300;
    }
})

function slideIn(element) {
    anime({
        targets: element,
        keyframes: [
            {
                translateY: '150px',
                opacity: 0,
                filter: 'blur(5px)',
            },
            {
                translateY: 0,
                opacity: 1,
                filter: 'blur(0)',
            }
        ],
        duration: 300,
        easing: 'linear',
    });
}

function slideOut(element) {
    anime({
        targets: element,
        keyframes: [
            {
                translateY: 0,
                opacity: 1,
                filter: 'blur(0)',
            },
            {
                translateY: '150px',
                opacity: 0,
                filter: 'blur(5px)',
            }
        ],
        duration: 300,
        easing: 'linear',
    });
}

function slideInFromLeft(element) {
    anime({
        targets: element,
        translateX: ['-200px', '0'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutCubic'
    })
}

function slideInFromRight(element) {
    anime({
        targets: element,
        translateX: ['200px', '0'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutCubic'
    })
}


function fadeIn(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        duration: 1500,
        easing: 'linear'
    });
}