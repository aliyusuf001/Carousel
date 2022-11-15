const track = document.querySelector(`.carousel_track`);
const slides = Array.from(track.children);
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

// when i click left, move slide to left


// when i click right, move slide to right
nextBtn.addEventListener("click", e => {
    const currentSlide = track.querySelector(`.current_slide`);
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    //move to the next slide
    track.style.transform = "translateX(-" + amountToMove + ")";
    currentSlide.classList.remove("current_slide");
    nextSlide.classList.add("current_slide");
    
})


// when i click the nav indicator, move to the slide