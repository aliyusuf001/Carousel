const track = document.querySelector(`.carousel_track`);
const slides = Array.from(track.children);
console.log(slides)
const nextBtn = document.querySelector(`.carousel_button.right`);
const prevBtn = document.querySelector(`.carousel_button.left`);
const dotsNav = document.querySelector(`.carousel_nav`);
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slide next to eachother
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current_slide");
    targetSlide.classList.add("current_slide");
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current_slide");
    targetDot.classList.add(`current_slide`);
}

// when i click left, move slide to left
prevBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(`.current_slide`);
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(`.current_slide`);
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});

// when i click right, move slide to right
nextBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(`.current_slide`);
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector(`.current_slide`);
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});


// when i click the nav indicator, move to the slide

dotsNav.addEventListener("click", e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest("button");

    if (!targetDot) return;

    const currentSlide = track.querySelector(`.current_slide`);
    const currentDot = dotsNav.querySelector(`.current_slide`);
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

});
