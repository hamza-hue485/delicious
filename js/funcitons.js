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
        navEl.style.backgroundColor ="transparent";
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
function prepareColsItems(colName){
    // console.log(colName)
    // let targetMeal = allMenu.filter(function(meal){
    //     return meal['type'] ===  colName ;
    // });
    // console.log(targetMeal)
    rowEle = `
            <div class="col-md-6 part1">
            <div class="item">
              <div class="row">
                <div class="col-4 wrapper">
                  <div class="frame h-100">
                    <div class="layout">
                      <!-- data-menu-type="breakfast" data-menu-index="1" -->
                      <i class="fa-regular fa-square-plus"></i>
                    </div>
                    <div class="img"></div>
                  </div>
              </div>
              <div class="col-8">
                <div class="content">
                  <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                    <span class="h6 mainColor">Everyday Pancakes</span>
                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                    <span class="h6 mainColor">$35.92</span>
                  </p>
                  <p class="subColor responsivePar">A delicious and crispy golden treat served hot and fresh daily.</p>
                </div>
              </div>
              </div>
              <div class="row">
                <div class="col-4 wrapper">
                  <div class="frame h-100">
                    <div class="layout">
                      <!-- data-menu-type="breakfast" data-menu-index="1" -->
                      <i class="fa-regular fa-square-plus"></i>
                    </div>
                    <div class="img"></div>
                  </div>
              </div>
              <div class="col-8">
                <div class="content">
                  <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                    <span class="h6 mainColor">Everyday Pancakes</span>
                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                    <span class="h6 mainColor">$35.92</span>
                  </p>
                  <p class="subColor responsivePar">A delicious and crispy golden treat served hot and fresh daily.</p>
                </div>
              </div>
              </div>
              <div class="row">
                <div class="col-4 wrapper">
                  <div class="frame h-100">
                    <div class="layout">
                      <!-- data-menu-type="breakfast" data-menu-index="1" -->
                      <i class="fa-regular fa-square-plus"></i>
                    </div>
                    <div class="img"></div>
                  </div>
              </div>
              <div class="col-8">
                <div class="content">
                  <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                    <span class="h6 mainColor">Everyday Pancakes</span>
                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                    <span class="h6 mainColor">$35.92</span>
                  </p>
                  <p class="subColor responsivePar">A delicious and crispy golden treat served hot and fresh daily.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="separator d-none d-md-block">
          </div>
          <div class="col-md-6 part2">
             <div class="item">
              <div class="row">
                <div class="col-4 wrapper">
                  <div class="frame h-100">
                    <div class="layout">
                      <i class="fa-regular fa-square-plus"></i>
                    </div>
                    <div class="img"></div>
                  </div>
              </div>
              <div class="col-8">
                <div class="content">
                  <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                    <span class="h6 mainColor">Everyday Pancakes</span>
                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                    <span class="h6 mainColor">$35.92</span>
                  </p>
                  <p class="subColor responsivePar">A delicious and crispy golden treat served hot and fresh daily.</p>
                </div>
              </div>
              </div>
              <div class="row">
                <div class="col-4 wrapper">
                  <div class="frame h-100">
                    <div class="layout">
                      <i class="fa-regular fa-square-plus"></i>
                    </div>
                    <div class="img"></div>
                  </div>
              </div>
              <div class="col-8">
                <div class="content">
                  <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                    <span class="h6 mainColor">Everyday Pancakes</span>
                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                    <span class="h6 mainColor">$35.92</span>
                  </p>
                  <p class="subColor responsivePar">A delicious and crispy golden treat served hot and fresh daily.</p>
                </div>
              </div>
              </div>
              <div class="row">
                <div class="col-4 wrapper">
                  <div class="frame h-100">
                    <div class="layout">
                      <i class="fa-regular fa-square-plus"></i>
                    </div>
                    <div class="img"></div>
                  </div>
              </div>
              <div class="col-8">
                <div class="content">
                  <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
                    <span class="h6 mainColor">Everyday Pancakes</span>
                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                    <span class="h6 mainColor">$35.92</span>
                  </p>
                  <p class="subColor responsivePar">A delicious and crispy golden treat served hot and fresh daily.</p>
                </div>
              </div>
              </div>
             </div>
          </div>
    `;
    // colsItems[0].innerHTML = "";
    // colsItems[1].innerHTML = "";
    // targetMeal.forEach(function (dish, i) {
    // if (i < 3) {
    //     colsItems[0].innerHTML += `
    //     <div class="row">
    //     <div class="col-4 wrapper">
    //     <div class="frame h-100">
    //     <div class="layout">
    //     <!-- data-menu-type="breakfast" data-menu-index="1" -->
    //     <i class="fa-regular fa-square-plus"></i>
    //     </div>
    //     <div class="img" style="width: 100%;
    //     height: 100%;
    //             background: url('./images/${dish.images}') center/cover no-repeat;"></div>
    //             </div>
    //             </div>
    //             <div class="col-8">
    //             <div class="content">
    //             <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
    //             <span class="h6 mainColor l">${dish.name}</span>
    //             <span class="decoratedSpan d-none d-sm-inline-block"></span>
    //             <span class="h6 mainColor">${dish.price}</span>
    //             </p>
    //             <p class="subColor responsivePar">${dish.miniDescription}</p>
    //                 </div>
    //                 </div>
    //                 </div>
    //                 `
    //             } else {
    // colsItems[1].innerHTML += `
    // <div class="row">
    // <div class="col-4 wrapper">
    // <div class="frame h-100">
    // <div class="layout">
    // <!-- data-menu-type="breakfast" data-menu-index="1" -->
    // <i class="fa-regular fa-square-plus"></i>
    // </div>
    //         <div class="img" style="width: 100%;
    //         height: 100%;
    //         background: url('./images/${dish.images}') center/cover no-repeat;"></div>
    //         </div>
    //         </div>
    //         <div class="col-8">
    //         <div class="content">
    //         <p class="d-flex align-items-center column-gap-3 column-gap-sm-0">
    //         <span class="h6 mainColor l">${dish.name}</span>
    //         <span class="decoratedSpan d-none d-sm-inline-block"></span>
    //         <span class="h6 mainColor">${dish.price}</span>
    //         </p>
    //         <p class="subColor responsivePar">${dish.miniDescription}</p>
    //         </div>
    //         </div>
    //         </div>
    //         `
    //     };
    // });
};
function getMealsByType(colName) {
    return allMenu.filter(function(meal) {
        return meal.type === colName;
    });
}  