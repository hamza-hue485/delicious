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
    loadingEle = document.querySelector(".loading"),
    popupMenuEl = document.querySelector(".popupMenu");
// prepareColsItems('BreakFast');
scrollNavAnimation();
window.addEventListener("load", function(){
    setTimeout(function(){
        loadingEle.classList.add("d-none");
    },2900)
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
            currentMeal.forEach(function (dish){
                rowMeals.forEach(function (rowEl){
                        rowEl.innerHTML = `
                                <div class="col-md-6 part1">
                                    <div class="item">
                                        ${getDishCol1(currentMeal)} 
                                    </div>
                                </div>
                                <div class="separator d-none d-md-block">
                                </div>
                                <div class="col-md-6 part2">
                                    <div class="item">
                                       ${getDishCol2(currentMeal)}
                                    </div>
                                </div>
                    `
                    console.log(rowEl)
                    });
            });
    });
});

