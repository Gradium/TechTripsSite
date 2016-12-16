var userFeed = new Instafeed({
get: 'user',
userId: '4015121560',
clientId: '131e461788214117b2738c081c22d183',
accessToken: '4015121560.131e461.8211de84f7104130b9ca6fc338ea412a',
template: '<div class="item">'
+ '<a href="javascript:void(0)" data-img="{{model.images.standard_resolution.url}}" data-username="{{model.caption.from.username}}" data-userphoto="{{model.caption.from.profile_picture}}" data-caption="{{model.caption.text}}" data-toggle="modal" data-target=".insta-modal-lg" id="{{id}}">'
+'<img src="{{image}}">'
+ '</a>'
+'</div>' ,
sortBy: 'most-recent',
limit: 15,
links: false,
resolution : 'low_resolution'
});
userFeed.run();

$('.insta-modal-lg').on('shown.bs.modal', function (e) {
var el = e.relatedTarget;
var profileImage = $(el).attr('data-userphoto'); 
var src = $(el).attr('data-img');
var caption = $(el).attr('data-caption');
var profile = $(el).attr('data-username');
$('#insta-foto').attr('src', src);
$('#profileImage').attr('style', "background-image: url('" + profileImage +"')");
$('#caption').html(caption);
$('#profile').html('@' + profile);
});
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
};
$(document).ready(function() {
    $('.albuns').click(function(){
        scrollToAnchor('insta-techtrips');
    });
});
