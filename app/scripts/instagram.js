var userFeed = new Instafeed({
get: 'user',
userId: '503185979',
clientId: 'ed314ad3e5a649d9b32b82427566f8cc',
accessToken: '503185979.ed314ad.fd92b89f2f7145c8aa6926664ccd98b9',
template: '<div class="item">'
+ '<a href="javascript:void(0)" data-img="{{model.images.standard_resolution.url}}" data-username="{{model.caption.from.username}}" data-userphoto="{{model.caption.from.profile_picture}}" data-caption="{{model.caption.text}}" data-toggle="modal" data-target=".insta-modal-lg" id="{{id}}">'
+'<img src="{{image}}">'
+ '</a>'
+'</div>' ,
sortBy: 'random',
limit: 30,
links: false,
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
})