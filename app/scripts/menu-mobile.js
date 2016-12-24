$(function(){ 
    var navMain = $("#menu-mobile");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});