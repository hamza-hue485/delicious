function replaceSlides(direction) {
    let currentActiveSlide = getActiveArray(slides)[0],
        currentSlideIndex = Array.from(slides).indexOf(currentActiveSlide),
        newSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    replaceActive(currentActiveSlide, slides[newSlideIndex]);
};
function replaceActive(oldActiveEL, newActiveEL) {
    oldActiveEL.classList.remove("active");
    newActiveEL.classList.add("active");
    oldActiveEL?.classList.remove("show");
    setTimeout(function(){
        newActiveEL?.classList.add("show") 
    },1)
};
function replaceIndicator(indicator) {
    let currentActiveIndicator = getActiveArray(indicators)[0],
    currentActiveSlide = getActiveArray(slides)[0],
    newActiveSlide = slides[indicators.indexOf(indicator)];
    replaceActive(currentActiveIndicator, indicator);
    replaceActive(currentActiveSlide, newActiveSlide);
};
function getActiveArray(elements) {
    return Array.from(elements).filter(function (el) {
        return el.classList.contains("active");
    });
};
function openPopup(popupName){
    let currentPopup = document.querySelector(`.${popupName}`);
    console.log(currentPopup)
    currentPopup.classList.add("active");
    setTimeout(function(){
        currentPopup.classList.add("show");
    }, 0);
};
function closePopup(popupName){
    let currentPopup = document.querySelector(`.${popupName}`);
    console.log(currentPopup)
    currentPopup.classList.remove("show");
    setTimeout(function(){
        currentPopup.classList.remove("active");
    }, 800);
};
function scrollNavAnimation(){
    let currentScroll = scrollY;
    if(currentScroll > 0){
        navEl.style.backgroundColor ="#202020";
        navUlEl.style.alignSelf ="initial";
      }else{
        navUlEl.style.alignSelf ="flex-end";
        
      };
      if( currentScroll > lastScroll ){
        navEl.style.transform ="translateY(-100%)";
        navEl.style.transitionDuration ="0.75s"
      }else{
        navEl.style.transform ="translateY(0%)"
    };    
    lastScroll = currentScroll;
};
function scrollNavLinks(section){
    if(scrollY >section.offsetTop - navEl.clientHeight && scrollY < section.offsetTop + section.clientHeight ){   
        let oldActiveArrEls = getActiveArray(liElements),
        newActiveArrEls = document.querySelectorAll(`li[data-id="${section['id']}"]`);
        replaceActive(oldActiveArrEls[0], newActiveArrEls[0])
        replaceActive(oldActiveArrEls[1], newActiveArrEls[1])
    };
};
function getMealsByType(colName) {
    return allMenu.filter(function(meal) {
        return meal.type === colName;
    });
}  
function getDishCol1(meal){
  meal.forEach( function(dish, i) {
    if(i < 3){
    return `<p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                                    <span class="h6 mainColor">${dish.name}</span>
                                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                                    <span class="h6 mainColor">${dish.price}</span>
                                </p>
                                <p class="subColor responsivePar">${dish.miniDescription}</p>`
                                };
  });
};
function getDishCol2(meal){
  meal.forEach( function(dish, i) {
    if(i > 3){
    return `<p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                                    <span class="h6 mainColor">${dish.name}</span>
                                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                                    <span class="h6 mainColor">${dish.price}</span>
                                </p>
                                <p class="subColor responsivePar">${dish.miniDescription}</p>`
                                };
  });
};