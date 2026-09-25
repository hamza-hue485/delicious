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
    rowMeals = document.querySelectorAll("#Menu .slide .row");
// prepareColsItems('BreakFast');
scrollNavAnimation();
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
        console.log()
        replaceActive(slideArrActives[0], specialSlides[i])
        let mealData = getMealsByType(meal.dataset.name);
            mealData.forEach(function (dish){
                rowMeals.forEach(function (rowEl){
                        console.log(rowEl)
                        rowEl = `
                        <div class="col-md-6 part1">
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
                                    <span class="h6 mainColor">${dish.name}</span>
                                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                                    <span class="h6 mainColor">${dish.price}</span>
                                </p>
                                <p class="subColor responsivePar">${dish.miniDescription}</p>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                                <div class="col-4 wrapper">
                                <div class="frame h-100">
                                    <div class="layout">
                                    </div>
                                    <div class="img"></div>
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
                                    <span class="h6 mainColor">${dish.name}</span>
                                    <span class="decoratedSpan d-none d-sm-inline-block"></span>
                                    <span class="h6 mainColor">${dish.price}</span>
                                </p>
                                <p class="subColor responsivePar">${dish.miniDescription}</p>
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
                        </div>
                    `
                    });
            });
    });
});
