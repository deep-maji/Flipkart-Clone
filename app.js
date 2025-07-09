const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.ri-arrow-left-s-line',
        prevEl: '.ri-arrow-right-s-line',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})


