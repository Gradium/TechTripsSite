$( document ).ready(function() {
    $('.close').on('click', function() {
        $('.yvideo')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    });
});