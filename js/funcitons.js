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
    currentPopup.classList.add("active");
    setTimeout(function(){
        currentPopup.classList.add("show");
    }, 0);
};
function closePopup(popupName){
    let currentPopup = document.querySelector(`.${popupName}`);
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
        navEl.style.backgroundColor ="transparent";
        navUlEl.style.alignSelf ="flex-end";
        
      };
      if( currentScroll > lastScroll ){
        navEl.style.transform ="translateY(-100%)";
        navEl.style.transitionDuration ="0.75s"
        navEl.style.boxShadow ="initial";
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
  let servant = "";
  meal.forEach( function(dish, i) {
    if(i < 3){
      servant += `
                        <div class="row dish" data-dish-id="${dish.id}">
                          <div class="col-4 wrapper">
                            <div class="frame h-100">
                                    <div class="layout">
                                        <i class="fa-regular fa-square-plus" onclick="preparePopupMenu(this)"></i>
                                    </div>
                                    <div class="img" style = "background-image: url('./images/${dish.images}')"></div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="content">
                                    <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                                      <span class="h6 mainColor">${dish.name}</span>
                                      <span class="decoratedSpan d-none d-sm-inline-block"></span>
                                      <span class="h6 mainColor">${dish.price}</span>
                                    </p>
                                    <p class="subColor responsivePar">${dish.miniDescription}</p>
                                </div>
                            </div>
                        </div>
                  `
                                  };
  });
  return servant ;
};
function getDishCol2(meal){
  let servant = "";
  meal.forEach( function(dish, i) {
    if(i >= 3){
      servant += `
                        <div class="row dish" data-dish-id="${dish.id}">
                          <div class="col-4 wrapper">
                            <div class="frame h-100">
                                    <div class="layout">
                                        <i class="fa-regular fa-square-plus" onclick="preparePopupMenu(this)"></i>
                                    </div>
                                    <div class="img" style = "background-image: url('./images/${dish.images}')"></div>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="content">
                                    <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                                      <span class="h6 mainColor">${dish.name}</span>
                                      <span class="decoratedSpan d-none d-sm-inline-block"></span>
                                      <span class="h6 mainColor">${dish.price}</span>
                                    </p>
                                    <p class="subColor responsivePar">${dish.miniDescription}</p>
                                </div>
                            </div>
                        </div>
                  `
                                  };
  });
  return servant ;
};
function preparePopupMenu(that){
  let dishId = that.closest(".dish").dataset.dishId;
  allMenu.forEach(function(dish){
    if(dish.id == dishId){
      popupMenuEl.innerHTML = `
      <div
        class="box dish text-center rounded-3 p-5 rounded-4" 
        onclick="event.stopPropagation()"
        data-dish-type="${dish.type}"
        data-dish-id="${dish.id}"
      >
              <i
                class="fa-regular fa-circle-xmark sideBarExit"
                onclick="closePopup('popupMenu')"
              ></i>
              <div class="title">
                <h5>SPECIAL SELECTION</h5>
                <img
                  src="./images/separator.svg"
                  alt="Design divider"
                  class="img-fluid"
                />
              </div>
              <h2 class="display-5 mb-4">${dish.name}</h2>
              <div class="cover position-relative mb-3 rounded-4 overflow-hidden">
                <img
                  src="./images/${dish.images}"
                  alt="Description image"
                  class="img-fluid"
                  id="dishImage"
                />
                <span class="price fw-bolder responsivePar">${dish.price}</span>
                <button class="next arrowBtn" onclick="replaceDishesImages(this)">
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
                <button class="prev arrowBtn" onclick="replaceDishesImages(this)">
                  <i class="fa-solid fa-chevron-left"></i>
                </button>
              </div>
              <p class="responsivePar text-start">
                ${dish.description}
              </p>
      </div>
  
       `;
    };
  });
  openPopup('popupMenu');
};
function replaceSlides(direction) {
    let currentActiveSlide = getActiveArray(slides)[0],
        currentSlideIndex = Array.from(slides).indexOf(currentActiveSlide),
        newSlideIndex = (currentSlideIndex + direction + slides.length) % slides.length;
    replaceActive(currentActiveSlide, slides[newSlideIndex]);
};
function replaceDishesImages(that){
 let dish = that.closest(".dish");
   dishType = dish.dataset.dishType,
   dishIdNum = Number(dish.dataset.dishId) ,
  dishImage = dish.querySelector("#dishImage"),
    dishImageArrSrc = dishImage.src.split("/"),
    meal = getMealsByType(dishType);
    if (that.classList.contains("next")) {
        dishIdNum = (dishIdNum + 1) % meal.length;
      } else {
        dishIdNum = (dishIdNum - 1 + meal.length) % meal.length;
      };
      let newNameImg = meal[dishIdNum].images[0];
    dish.dataset.dishId = dishIdNum;
    dishImageArrSrc[dishImageArrSrc.length - 1] = newNameImg;
  dishImage.src = dishImageArrSrc.join("/");
  
};