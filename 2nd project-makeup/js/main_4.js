$(function () {

  let win_w = $(window).width();
  let pos = []; // 각 섹션의 위치를 저장할 배열 선언
  let sub_title_pos = [];
  let base_line = -1500;
  let html_tag = "";

  
  function save_offset() {
    pos = []; // 배열 초기화
    $("section").each(function () {
      let offset = $(this).offset().top; // 문서 내의 요소의 위치값
      pos.push(offset); // push 배열에 마지막 값 추가하는 역할
    });

    // pos.push($(".look_book").offset().top);
    pos.push($(".sub_txt").offset().top); // 마지막 값 하나 더 추가
    pos[0] = 0;
  }
  save_offset();

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
  // 리뷰의 별점
  let rating = $('.review .rating').each(function(){
    let $this = $(this);
      let targetScore = $this.attr('data-rate');
      let firstdata = targetScore.split('.');
      console.log(firstdata);
      if(firstdata.length > 1){
        for(let i = 0; i<targetScore[0];i++){
          $this.find('.star').eq(i).css({width:'100%'});
        }
        $this.find('.star').eq(targetScore[0]).css({width:'50%'})
      }else{
        for(let i = 0; i<targetScore;i++){
          $this.find('.star').eq(i).css({width:'100%'});
        };

      };

  });

  //brand story 영역
  function save_sub_title_offset() {
    sub_title_pos = []; // 배열 초기화

    $(".sub_txt>ul>li").each(function () {
      let offset = $(this).offset().top; // 문서 내의 요소의 위치값
      sub_title_pos.push(offset); // push 배열에 마지막 값 추가하는 역할
    });
    let last =
      $(".sub_txt>ul>li").last().offset().top +
      $(".sub_txt>ul>li").last().height();
    sub_title_pos.push(last); // 마지막 값 하나 더 추가
  };
  save_sub_title_offset();
  $('.tab_menu a').click(function(){
    let index = $(this).index();
    index++;
    $('.tab_menu a').removeClass('active');
    $(this).addClass('active');

    $('.content').removeClass('on');
    $('#contents'+index).addClass('on');
  });

  $('.brand_story_mob .tab').on('click', function(e){
      e.preventDefault(); 
      $('.faq .panel').stop().slideUp();
      $(this).next('.panel').stop().slideToggle();

      $(this).parents().addClass('on').siblings().removeClass('on');
  });

  // 윈도우 스크롤 이벤트
  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();
    $("section").each(function (index) {
      if (
        scroll >= pos[index] + base_line &&
        scroll < pos[index + 1] + base_line
      ) {
        $(this).addClass("on");
      }
    });

    $(".sub_txt>ul>li").each(function (index) {
      if (
        scroll >= sub_title_pos[index] + base_line &&
        scroll < sub_title_pos[index + 1] + base_line
      ) {
        $(".sub_title>ul>li").eq(index).show().siblings().hide();}
    });
  });
    //  스와이프

    let swiper_left = new Swiper('.best_item .left .swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: "fade",
      navigation: {
        nextEl: '.best_item .swiper-button-next',
        prevEl: '.best_item .swiper-button-prev',
      },
    });
  
    let swiper_right = new Swiper('.best_item .right .swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.best_item .swiper-button-next',
        prevEl: '.best_item .swiper-button-prev',
      },
    });


    let swiper_event = new Swiper(".event .event_swiper", {
      loop: true,
      navigation: {
        nextEl: ".event .swiper-button-next",
        prevEl: ".event .swiper-button-prev",
      },
    });

    let swiper_gallery = new Swiper(".gallery .galleryswiper", {
      loop: true,
      slidesPerView: 3,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });


    // gnb 부분
  $(".gnb>li").on("mouseenter", function () {
    if (win_w > 980) {
      $(".sub").stop().hide();
      $(this).children(".sub").stop().slideToggle();
    } else {
      $(".gnb>li>a").off("click");
      $(".gnb>li>a").on("click", function () {
        $('.sub').stop().slideUp();
        $(this).next(".sub").stop().slideToggle();
      });
    }
  });
  $(".gnb").on("mouseleave", function () {
    if (win_w > 980) {
      $(".sub").stop().slideUp();
    }
  });

  $(".gnb").on("mouseleave", function () {
    if (win_w > 980) {
      $(".sub").stop().slideUp();
    }
  });


  // 토글 메뉴바

  $(".toggle").on("click", function () {
    $(".gnb_wrap").toggleClass("on");
    $('.header').toggleClass('on');
  });

  // 메인슬라이드
  let swiper_main = new Swiper(".main_visual .swiper", {
    loop: true,
    navigation: {
      nextEl: ".visual .swiper-button-next",
      prevEl: ".visual .swiper-button-prev",
    },
  });
});
