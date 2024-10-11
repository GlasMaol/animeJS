
const textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const text2Wrapper = document.querySelector('.text2');
text2Wrapper.innerHTML = text2Wrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.text .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 1,
        delay: (el, i) => 100 * i
    })
    .add({
        targets: '.text2 .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 1,
        delay: (el, i) => 100 * i
    });