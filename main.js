const buttonPrev = document.getElementById('button-prev');
const buttonNExt = document.getElementById('button-next');
const track = document.getElementById('track');
const slideList = document.getElementById('slide-list');
const slide = document.querySelectorAll('.slide');

const slideWidth = slide[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNExt.onclick = () => Move(2);

function Move(value) {
    console.log('mover')
    const trackWidth = track.offsetWidth;
    const listWidth = slideList.offsetWidth;

    track.style.left == "" ? leftposition = track.style.left = 0 : leftposition = parseFloat(track.style.left.slice(0, -2) * -1);

    if(leftposition < (trackWidth - listWidth) && value == 2) {
        track.style.left = `${-1 * (leftposition + slideWidth)}px`;
    } else if (leftposition > 0 && value == 1) {
        track.style.left = `${-1 * (leftposition - slideWidth)}px`;
    }
}