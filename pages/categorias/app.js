let swiper = new Swiper(".mySwiper", {
        effect:"coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView:"auto",
        loop: true,
        coverflowEffect: {
            depth: 500,
            modifer: 1,
            slidesShadows: true
        }
    })