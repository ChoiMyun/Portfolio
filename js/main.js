$(function () {

  let win_w = $(window).width();
  let pos = []; // 각 섹션의 위치를 저장할 배열 선언
  let sub_title_pos = [];
  let base_line = -400;
  let html_tag = "";


  function save_offset() {
    pos = []; // 배열 초기화
    $("section").each(function () {
      let offset = $(this).offset().top; // 문서 내의 요소의 위치값
      pos.push(offset); // push 배열에 마지막 값 추가하는 역할
    });

    // pos.push($(".look_book").offset().top);
    // pos.push($('.footer').offset().top); // 마지막 값 하나 더 추가
    // pos[0] = 0;
  }
  save_offset();


  // 스와이퍼
  let per_view = new Swiper('.per_view .swiper', {
    slidesPerView: 1,
    spaceBetween: -30,
    loop: true,
    loopAdditionalSlides : 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      // type: "fraction",
      clickable: true,
    },
    navigation: {
      nextEl: '.per_view .swiper-button-next',
      prevEl: '.per_view .swiper-button-prev',
    },
  });

  // window 리사이즈 이벤트
  $(window).on("resize", function () {
    win_w = $(this).width(); // 윈도우 사이즈 변경될때마다 다시 체크
    save_offset(); // 윈도우 리사이즈 될때마다 위치값 다시 구해서 저장
    win_w = $(this).width();
    if (win_w >= 960) {
      $('.sub').hide(); // 반응형->pc로 돌아갈때 하위메뉴 열려있지 않도록
      base_line = -400;
    } else if (win_w >= 768) {
      base_line = -300;
    } else {
      base_line = -200;
    }
  });
  // 스크롤 이벤트
  $(window).on('scroll',function(){
    let scroll = $(this).scrollTop();
    $('.content').each(function(index){
      if( scroll >= pos [index] + base_line && scroll < pos[index+1] + base_line ){
        $(this).addClass('.on');
      };
    });
  });
  
  $('.header>ul>a').on('click', function(e){
    e.preventDefault();
  });

  $('.recommen_item .tab>li>a').first().trigger('click');



});

AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});