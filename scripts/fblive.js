var fblive = {
    simpleRequest : function(callback){
        $.ajax({
            url: "http://techtrips.com.br/live/app/GetLive",
            dataType: "json",
            success: function (data) {
                callback(data);
            }
        });
    }
    , createBox: function(data){
        var liveBox = '<a href="[link]" target="_blank" class="link-live">'
            , live = '<div class="live-notificacao live"><p class="on">Estamos ao vivo! Clique e acompanhe nossa transmissão!</p>'
            , notLive = '<div class="live-notificacao notLive"><p class="notOn" >No momento não estamos ao vivo</p>'
            , closeBox = '</div></a>'
            , fbData = data;

        liveBox = liveBox.replace('[link]', fbData.LiveId);
        if(fbData.IsLive){
            liveBox += live;
        }else{
            liveBox += notLive;
        }

        liveBox += closeBox;

        $('#fbLive').html(liveBox);
    }
    , start : function(){
        var me = this;
        //me.simpleRequest(me.createBox);
    }
}

$(document).ready(function() {
    fblive.start();
});