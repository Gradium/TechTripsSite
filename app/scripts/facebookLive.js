var live = {
    startRequest: function(callback){
        $.ajax({
            url: 'http://techtrips.com.br/live/App/GetLive/',
            dataType: 'jsonp',
            success: function(data){
                callback(data);
            }
        });
    }
    , createBoxLive: function(idContent){

            var box = 



            <a href="#" class="link-live">
                <!--<div class="live-notificacao live">-->
                <div class="live-notificacao notLive">
                    <p class="on">Estamos ao vivo! Clique e acompanhe nossa transmissão!</p>
                    <p class="notOn" >No momento não estamos ao vivo</p>
                </div>
            </a>
    }
};



$(document).ready(function(){
                $.ajax({
                    url: 'http://techtrips.com.br/live/App/GetLive/',
                    dataType: 'jsonp',
                    success: function(data){
                        var text = '';
                        // var len = dataWeGotViaJsonp.length;
                        // for(var i=0;i<len;i++){
                        //     twitterEntry = dataWeGotViaJsonp[i];
                        //     text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
                        // }
                        // $('#twitterFeed').html(text);

                        console.log(data);
                    }
                });
            })