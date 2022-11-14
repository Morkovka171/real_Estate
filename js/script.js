const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.body-main-block__arrow.swiper-button-next',
      prevEl: '.body-main-block__arrow__arrow.swiper-button-prev',
    },
  });

  //Таб
const TabNavItems = document.querySelectorAll('.tabs-deals__button');
const TabItems = document.querySelectorAll('.item-tabs');
document.addEventListener('click', function(e) {
  const targetElement = e.target;
  let currentActiveIndex = null;
  let newActiveIndex = null;
  if(targetElement.closest('.tabs-deals__button')) {
    TabNavItems.forEach((TabNavItem, index) => {
      if(TabNavItem.classList.contains('active')){
        currentActiveIndex = index;
        TabNavItem.classList.remove('active');
      }
      if(TabNavItem === targetElement){
        newActiveIndex = index;
      }
      //
    });
    targetElement.classList.add('active');
    TabItems[currentActiveIndex].classList.remove('active');
    TabItems[newActiveIndex].classList.add('active');
  }
});