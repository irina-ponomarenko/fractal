$(document).ready(function(){
//--------------------------dropdown faq----------------------//

    $(".item-faq").click(function() {
        let child = $(this).children(".container-info-faq");

        $(".item-faq").children(".container-info-faq").slideUp(300);
        $(".item-faq").removeClass('active-block');
        $(".chevron-faq-item").removeClass('active-btn-faq');

        if (child.is(":hidden")) {
            child.slideDown(300);
            $(this).find('.chevron-faq-item').addClass('active-btn-faq');
            $(this).addClass('active-block');
        };
    });

    //----------------back to top-------------------------------//

    let btn = $('.btn-to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

    //--------------dropdown language--------//

    $(".chose-lg").click(function (){
       $(this).closest(".header-btn-container").find(".languages-list").slideToggle(100);
       $(this).toggleClass('turn-btn');
    });

    //-------------tabs---------------------//

    const tabLinks = document.querySelectorAll(".tabs a");
    const tabPanels = document.querySelectorAll(".tabs-panel");

    for(let el of tabLinks) {
        el.addEventListener("click", e => {
            e.preventDefault();

            document.querySelector('.tabs-item.active').classList.remove("active");
            document.querySelector('.tabs-panel.active').classList.remove("active");

            const parentListItem = el.parentElement;
            parentListItem.classList.add("active");
            const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

            const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
            panel[0].classList.add("active");
        });
    }

});