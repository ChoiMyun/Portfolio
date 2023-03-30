$(function(){

  AOS.init({easing: 'ease'});

  function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)
  
  
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
});



