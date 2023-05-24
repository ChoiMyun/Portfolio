$(function(){

  AOS.init({easing: 'ease'});

  function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 70) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  };
  window.addEventListener('scroll', scrollHeader);
  
  // home img fade out //
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener('scroll',() =>{
    home.style.opacity = 1 - window.scrollY / 600
  });

  
  const linkWork = document.querySelectorAll('.work__item')
  
  function activeWork(){
      linkWork.forEach(l=> l.classList.remove('active-work'))
      this.classList.add('active-work')
  }
  linkWork.forEach(l=> l.addEventListener('click', activeWork))
  

  let mixerPortfolio = mixitup('.work__container',{
    selectors:{target:'.work__card'}
  })

  //  lightbox  // 
  lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
  });


  // Arrow UP //
  const arrowUp = document.querySelector('.arrow-up');
  document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 1) {
      arrowUp.classList.add('visible');
    } else{
      arrowUp.classList.remove('visible')
    }
  });

  $('.toggle').on('click', function(){
    $('.nav__menu').toggleClass('on');
  });
  

});



