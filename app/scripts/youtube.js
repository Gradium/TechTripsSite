 var videoManager = {
    getInfo: function(data){
        return {
            link: data.snippet.resourceId.videoId
            , thumbnails: data.snippet.thumbnails.default.url
            , description : data.snippet.title
        }
    },
    createBox: function(info){
        var templatebox = '<a href="[link]" target="_blank"><div class="video-item"><img width="98%" src="[srcImg]"></div><div class="box-multline-doted video-title">[description]</div></a>';
        var videoLink = "https://www.youtube.com/watch?v=" + info.link;
        templatebox = templatebox.replace('[link]', videoLink);
        templatebox = templatebox.replace('[srcImg]', info.thumbnails);
        templatebox = templatebox.replace('[description]', info.description);
        return templatebox;
    },
    createList: function(items, containerId){
        var me = videoManager
            , size = items.length
            , videos = '';
        items.reverse();
        for(var i=0; i<size; i++) {
            videos += me.createBox(me.getInfo(items[i])); 
        }
        $(containerId).append(videos);
    },
    requestData: function(listId, callback, containerId){
        var url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=[listId]&key=AIzaSyArZ8VfK84ZHCbwi5Phvjt7Hs5CzFU7WPQ&maxResults=15';
        url = url.replace('[listId]', listId);
        $.getJSON(url, function(data) {
            callback(data.items, containerId);
        });
    },
    start: function(){
        var me = this;
        me.requestData('PLl764MQ7CPCrR9ObCIP_EWWBw7agyYPEI', me.createList, '.video-dicas .videos');
        me.requestData('PLl764MQ7CPCrkz0p0HGC80M9hKzKOtZAu', me.createList, '.video-motorhome .videos');
        me.requestData('PLl764MQ7CPCqM5a3j9BD15w7sT-N_7XlC', me.createList, '.video-maker .videos');
        //me.requestData('PLl764MQ7CPCp0tUYfhfshPi8iyM9dVfse', me.createList, '.video-educacao .videos');
    }
}

$(document).ready(function() {
    videoManager.start();
});