// brand
var swiper = new Swiper(".mySwiper", {
    effect: 'fade',
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    speed: 1000
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next", // 버튼이 밖으로 이동되어도 작동
    },
    autoplay: {
        delay: 3000,
    },
    thumbs: {
        swiper: swiper,
    },
    speed: 2000
});

// cf & news
var swiper = new Swiper(".slide-news", {
    // 모바일기준 1개
    slidesPerView: 1.2,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.2,
            spaceBetween: 50,
        },
    },
});