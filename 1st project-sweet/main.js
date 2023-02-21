$( function(){ // html 문서에서 태그들을 다 가져와

    let win_w = $(window).width();
    let pos = [];   // 각 섹션의 위치를 저장할 배열 선언
    let base_line = -500;

    function save_offset(){     // 함수 정의
        pos = []; // 배열 초기화
        $('.content').each(function(){
            let offset = $(this).offset().top; // 문서 내의 요소의 위치값
            pos.push( offset ); // push 배열에 마지막 값 추가하는 역할
        });
       
        pos.push($('.footer').offset().top); // 마지막 값 하나 더 추가
    }

    save_offset();

    // window 리사이즈 이벤트
    $(window).on('resize', function(){
        win_w = $(this).width(); // 윈도우 사이즈 변경될때마다 다시 체크
       
        save_offset(); // 윈도우 리사이즈 될때마다 위치값 다시 구해서 저장

        win_w = $(this).width();
        if( win_w >= 960){
            $('.subwrap').removeAttr('style');
            base_line = -400
        }else if( win_w >=768){
            base_line = -300
        }else{
            base_line = -200
        }
    });
    
      // 리뷰의 별점
    let rating = $('.review_star .rating').each(function(){
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

    // 윈도우 스크롤 이벤트
    $(window).on('scroll', function(){
        let scroll = $(this).scrollTop();
  
        $('.content').each(function(index){ // <-- 현재 요소의 인덱스번호
            if( scroll >= pos [index] + base_line && scroll < pos[index+1] + base_line){
                $(this).addClass('on');
               $(this) = $('.content').eq(index)
               $(this).addClass('on').siblings().removeClass('on');
            }
        });
    });

    $('.gnb>li').on('mouseenter', function(){
        if(win_w>980){
            $('.submenu').stop().hide();
            $(this).children('.submenu').stop().slideDown();
        }else{
            $('.gnb>li>a').off('click'); 
            $('.gnb>li>a').on('click', function(){
                $('.gnb>li>a').next('.submenu').stop().slideUp();
                $(this).next('.submenu').stop().slideToggle();
            });
        }
    });

    // 헤드 상단 메뉴바 
    $('.gnb>li').on('mouseleave', function(){
        if(win_w>768){
            $('.submenu').stop().slideUp();
        }
    });



    // 토글 메뉴바
    $('.toggle').on('click', function(){
        $('.gnb_wrap').toggleClass('on');
        $('.header').toggleClass('on');
    });

    
    $('.gnb>li>a').on('mouseenter', function(){
        if(win_w>980){
            $('.submenu').stop().hide();
            $(this).children('.subwrap').stop().slideDown();
        }else{
            $('.gnb>li>a').off('click');
            $('.gnb>li>a').on('click', function(){
                $('.submenu').stop().slideUp();
                $(this).next('.submenu').stop().slideToggle();
            });
        }
    });

    // 메인슬라이드
    let swiper_main = new Swiper('.main_visual .swiper', {
        loop: true,
        navigation: {
          nextEl: '.visual .swiper-button-next',
          prevEl: '.visual .swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        
    });
    
    // PC 추천 스와이프
    let swiper_recommen_tab = new Swiper('.recommen_item .panel .swiper', {
        loop: true,
        navigation: {
          nextEl: '.recommen_item .swiper-button-next',
          prevEl: '.recommen_item .swiper-button-prev',
          
        },
    });
    // 모바일 추천 스와이프
    let swiper_recommen_mod_tab = new Swiper('.recommen_item_mod .panel .swiper', {
        loop: true,
        effect: "fadeIn",
        navigation: {
          nextEl: '.recommen_item_mod .swiper-button-next',
          prevEl: '.recommen_item_mod .swiper-button-prev',
        },
        pagination: {
            el: ".recommen_item_mod .swiper-pagination",
            type: "fraction",
        },
    });

    //revewiw 스와이퍼
    let swiper_review = new Swiper('.review .swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // when window width is >= 900px
            900: {
              slidesPerView: 3,
              spaceBetween: 50
            },
            // when window width is >= 800px
            800: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            // when window width is >= 600px
            600: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 412px
            300: {
              slidesPerView: 1,
              spaceBetween: 20
            },
        },
        navigation: {
          nextEl: '.review .swiper-button-next',
          prevEl: '.review .swiper-button-prev',
        },
    });


    // PC버전 추천 탭부분
    $('.recommen_item .tab>li>a').on('click', function(e){

        e.preventDefault();
        
        $('.recommen_item .panel').hide();
        $(this).next('.panel').fadeIn();
        
        $('.recommen_item .tab>li').removeClass('on');
        $(this).parents('li').addClass('on');
        
      });
    
      $('.recommen_item .tab>li>a').first().trigger('click');
    
    // 모바일 추천 탭 부분
    $('.recommen_item_mod .tab>li>a').on('click', function(e){
        e.preventDefault();
        
        $('.recommen_item_mod .panel').hide();
        $(this).next('.panel').fadeIn();
        
        $('.recommen_item_mod .tab>li').removeClass('on');
        $(this).parents('li').addClass('on');
        
      });
    
      $('.recommen_item_mod .tab>li>a').first().trigger('click');




    

});


