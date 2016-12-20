var fblive = {
    live: null
    , simpleRequest : function(callback){
        var url = "http://techtrips.com.br/live/app/GetLive";
        if(window.location.href.indexOf('http://www.') == 0){
            url = "http://www.techtrips.com.br/live/app/GetLive";
        }
        setInterval(function() {
            $.ajax({ 
                url: url, 
                dataType: "json",
                success: function(data) {
                    callback(data);
                }
            });
        }, 30000);
        // $.ajax({
        //     url: "http://techtrips.com.br/live/app/GetLive",
        //     dataType: "json",
        //     success: function (data) {
        //         callback(data);
        //     }
        // });
    }
    , createBox: function(data){
        var liveBox = '<a href="[link]" [target] class="link-live">'
            , live = '<div class="live-notificacao live"><p class="on">Estamos ao vivo! Clique e acompanhe nossa transmissão!</p>'
            , notLive = '<div class="live-notificacao notLive"><p class="notOn" >No momento não estamos ao vivo</p>'
            , closeBox = '</div></a>'
            , fbData = JSON.parse(data);


        if(fblive.live === fbData.IsLive){
            return;
        }

        if(fblive.live === null){
            fblive.live = fbData.IsLive;
        }

        liveBox = liveBox.replace('[link]', fbData.LiveId);
        if(fbData.LiveId.indexOf('fb://') == -1){
            liveBox = liveBox.replace('[target]', 'target="_blank"');
        }else{
            liveBox = liveBox.replace('[target]', '');
        }
        
        if(fbData.IsLive){
            fblive.live = true;
        //    liveBox = liveBox.replace('[target]', '');
            liveBox += live;
        }else{
            liveBox += notLive;
            fblive.live = false;
        }

        liveBox += closeBox;

        $('#fbLive').html(liveBox);
    }
    , start : function(){
        var me = this;
        me.simpleRequest(me.createBox);
    }
}

$(document).ready(function() {

    var url = "http://techtrips.com.br/live/app/GetLive";
    if(window.location.href.indexOf('http://www.') == 0){
        url = "http://www.techtrips.com.br/live/app/GetLive";
    }

    $.ajax({ 
        url: url, 
        dataType: "json",
        success: function(data) {
            fblive.createBox(data);
        }
    });
    fblive.start();
});