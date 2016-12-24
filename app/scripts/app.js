var app = {
    setIconSize: function(){
        var wg = $(window).width();
        if(wg <= 320){
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

    // LONG POOLING
    // setInterval(function(){
    //     console.log('disparou');
    //     $.ajax({ url: "http://techtrips.com.br/live/App/GetOn/", success: function(data){
    //         //Update your dashboard gauge
    //         console.log(data);
    //     }, dataType: "json"});
    // }, 5000);

});
