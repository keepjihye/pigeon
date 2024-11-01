// kakao map
new daum.roughmap.Lander({
    "timestamp": "1729840237502",
    "key": "2m2gg",
    "mapWidth": "4000",
    "mapHeight": "850"
}).render();

// scrollTrigger
gsap.registerPlugin(ScrollTrigger)

// main visual
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

// kakao map
new daum.roughmap.Lander({
    "timestamp": "1729840237502",
    "key": "2m2gg",
    "mapWidth": "4000",
    "mapHeight": "850"
}).render();