const button = document.querySelector(".button");
const card = document.querySelector(".card");

// button animation
const mouseHoverAnimation = () => {
    anime({
        targets: button,
        width: '10rem',
        scale: {
            delay: 100,
            value: 1.15
        },
        duration: 1500
    })
}

const mouseOutAnimation = () => {
    anime({
        targets: button,
        width: '7rem',
        scale: {
            delay: 100,
            value: 1
        },
        duration: 1500
    })
}
// card animation
const cardHoverAnimation = () => {
    anime({
        targets: card,
        // width: '10rem',
        scale: {
            delay: 100,
            value: 1.15
        },
        duration: 1500
    })
}

const cardOutAnimation = () => {
    anime({
        targets: card,
        // width: '7rem',
        scale: {
            delay: 100,
            value: 1
        },
        duration: 1500
    })
}

button.addEventListener("mouseover", mouseHoverAnimation)
button.addEventListener("mouseout", mouseOutAnimation)
card.addEventListener("mouseover", cardHoverAnimation)
card.addEventListener("mouseout", cardOutAnimation)