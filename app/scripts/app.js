var app = {
    setIconSize: function(){
        var wg = $(window).width();
        if(wg <= 320){
            debugger;
            $('.mdi-menu-size').removeClass('mdi-24px');
            $('.mdi-menu-size').addClass('mdi-18px');
        }
    }
};


$( document ).ready(function() {
    app.setIconSize();
    $('.close').on('click', function() {
        $('.yvideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
});