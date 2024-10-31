
// AOS
AOS.init();
// scrollTrigger
gsap.registerPlugin(ScrollTrigger)

// .all_menu클릭하면 #nav_all에 active 추가하기
$('.all_menu').click(function () {
    $('#nav-all').addClass("active");
    $('.nav-all__wrap').addClass("active");
});

$('#nav-all').click(function () {
    $('#nav-all').removeClass('active')
    $('.nav-all__wrap').removeClass("active");;
});


$(".lang").on({
    click: function () {
        $(".lang__lst").slideDown();
    },
    mouseleave: function () {
        $(".lang__lst").slideUp();
    }
})

// kakao map
new daum.roughmap.Lander({
    "timestamp": "1729840237502",
    "key": "2m2gg",
    "mapWidth": "4000",
    "mapHeight": "850"
}).render();

// To - top / nav가리기
window.addEventListener(
    "scroll",
    // thirottle 과부하 줄이기
    _.throttle(function () {
        const scrolled = window.scrollY;
        // console.log(`스크롤 값 : ${scrolled}`);
        if (scrolled > 80) {
            gsap.to("#header", { yPercent: -100 });

        } else {
            gsap.to("#header", { yPercent: 0 });

        }
    })
);

// main visual
// if (window.innerWidth >= 1024) {
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-visual',
        pin: true, // 스크롤 중에 요소 고정
        start: 'top 0', // 시작 위치
        end: '+=700', // 800px 스크롤 시까지 애니메이션
        scrub: 1, // 부드러운 스크롤 효과
        // markers: true, // 마커 표시 (디버깅용)
    }
});

// .main-visual__circle 애니메이션
tl.to(".main-visual__circle", {
    "--clip": '100%',
    ease: "power2.out", // easing 설정
});

// .main-visual__txtBox 애니메이션
tl.to(".main-visual__txtBox", {
    scale: 0.7, // 원하는 축소 비율로 조정
    ease: "power2.out", // easing 설정
}, 0);

