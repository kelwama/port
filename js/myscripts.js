function windowH() {
    var wH = $(window).height();
    
    $('.sideBar, .mainImg').css({height: wH});
}

windowH();
