let homeEle = document.querySelector("#Home"),
    scCarouselPa = homeEle.querySelector("#Home .SC-parentCarousel"),
    slides = scCarouselPa.querySelectorAll(".childCarousel"),
    nextBtn = homeEle.querySelector(".next"),
    prevBtn = homeEle.querySelector(".prev"),
    indicators = Array.from(homeEle.querySelectorAll(".indicator")),
    animatedBox = homeEle.querySelector(".animatedBox"),
    navEl = document.querySelector("nav"),
    navUlEl = navEl.querySelector(".navLinks"),
    lastScroll = window.scrollY,
    liElements = document.querySelectorAll(".navLinks li"),
    sections = document.querySelectorAll("section, header"),
    rowEle = document.querySelectorAll("#Menu .container .row"),
    mealsNavEls = document.querySelectorAll("#mealsNav li"),
    rowMeals = document.querySelectorAll("#Menu .slide .row"),
    specialSlides = document.querySelectorAll("#Menu .slide"),
    loadingEle = document.querySelector(".loading");
// prepareColsItems('BreakFast');
scrollNavAnimation();
window.addEventListener("load", function(){
    setTimeout(function(){
        loadingEle.classList.add("d-none");
    },1200)
    loadingEle.classList.add("hide");
});
nextBtn.addEventListener("click", function () {
    replaceSlides(1);
});
prevBtn.addEventListener("click", function () {
    replaceSlides(-1);
});
indicators.forEach(function (indicator) {
    indicator.addEventListener("click", function () {
        replaceIndicator(indicator);
    });
});
window.addEventListener("scroll", function () {
    scrollNavAnimation();
    sections.forEach(function (section) {
        scrollNavLinks(section);
    });
});
indicators.forEach(function (indicator) {
    indicator.addEventListener("click", function () {
        replaceIndicator(indicator);
    });
});
mealsNavEls.forEach(function (meal,i) {
    meal.addEventListener("click", function () {
        let oldActiveArrEls = getActiveArray(mealsNavEls);
        replaceActive(oldActiveArrEls[0], meal);
        replaceActive(oldActiveArrEls[0], meal);
        slideArrActives = getActiveArray(specialSlides);
        replaceActive(slideArrActives[0], specialSlides[i])
        let currentMeal = getMealsByType(meal.dataset.type);
            console.log(currentMeal)
            currentMeal.forEach(function (dish){
                console.log(rowMeals)
                rowMeals.forEach(function (rowEl){
                        console.log(rowEl)
                        rowEl = `
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
                                                    ${getDishCol1(currentMeal)}
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
                                                    ${getDishCol2(currentMeal)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    `
                    });
            });
    });
});
