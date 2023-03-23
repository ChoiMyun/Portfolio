$(function(){
//aos 설정
  AOS.init({easing: 'ease'});

  let win_w = $(window).width();
  let pos = [];   // 각 섹션의 위치를 저장할 배열 선언
  let base_line = -400;

  function save_offset(){     // 함수 정의 
      pos = []; // 배열 초기화
      $('.content').each(function(){
          let offset = $(this).offset().top; // 문서 내의 요소의 위치값
          pos.push( offset ); // push 배열에 마지막 값 추가하는 역할
      });
      
      pos.push($('.footer').offset().top); // 마지막 값 하나 더 추가
  };

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

    // 윈도우 스크롤 이벤트
  // $(window).on('scroll', function(){
  //   let scroll = $(this).scrollTop();
    
  //   $('.section').each(function(index){ // <-- 현재 요소의 인덱스번호
  //     if( scroll >= pos [index] + base_line && scroll < pos[index+1] + base_line){
  //       $(this).addClass('on');
  //       $(this) = $('.content').eq(index)
  //       $(this).addClass('on').siblings().removeClass('on');
  //       };
  //     });
  // });


    
  // toggle 메뉴바
  $('.toggle').on('click', function(){
    $('.gnb_wrap').toggleClass('on');
    $('.header').toggleClass('on');
  });


  //about => keyword 소개
  const wr = document.querySelector(".about .left .keyword ul");
  const words = wr.children;
    let x = 0;
    rotate(x);

    setInterval(() => {
      x = ++x % words.length;
      rotate(x);
    }, 1000);

  function rotate(start) {
    for (let i = 0; i < words.length; ++i) {
      const j = (start + i) % words.length;
      let percent = j / words.length;
      let rad = percent * 2 * Math.PI;
      let y = Math.sin(rad) * 200;
      let z = 40 * Math.cos(rad) - 40;
      let op = (Math.cos(rad) + 1) / 2;
      words[i].style.transform = `perspective(100px)
      translateZ(${z}px) translateY(${y}%)`;
      words[i].style.opacity = `${op}`;
    }
  }

  //  lightbox  // 
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

	// //mywork 탭메뉴
	$("#mywork .btn p").click(function(){
		var i = $(this).index()
		$(".tabBox ul").hide()
		$(".tabBox ul").eq(i).fadeIn()
		return false;
	})

});
  






