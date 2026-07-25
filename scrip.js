document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".carousel__track");
    const wrapper = document.querySelector(".carousel__track-wrapper");

    const prevBtn = document.querySelector(".carousel__side-btn--prev");
    const nextBtn = document.querySelector(".carousel__side-btn--next");

    const dots = document.querySelectorAll(".carousel__dot");

    let currentPage = 0;

    function updateCarousel() {

        const moveDistance = wrapper.clientWidth;

        track.style.transform =
            `translateX(-${currentPage * moveDistance}px)`;

        dots.forEach(dot =>
            dot.classList.remove("carousel__dot--active")
        );

        dots[currentPage].classList.add("carousel__dot--active");
    }

    nextBtn.addEventListener("click", () => {

        if (currentPage < 1) {
            currentPage++;
            updateCarousel();
        }

    });

    prevBtn.addEventListener("click", () => {

        if (currentPage > 0) {
            currentPage--;
            updateCarousel();
        }

    });

    window.addEventListener("resize", updateCarousel);

});