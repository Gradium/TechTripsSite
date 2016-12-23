$(document).ready(function() {
    var urlExternal = document.location.href
        ,withmodal = urlExternal.split('#');
    if(withmodal.length == 2){
        var modal = withmodal[1];
        if(document.getElementById(modal)){
            $('#' + modal).modal('show');
        }
    }
});

//http://techtrips.com.br/#modal-naEstrada
//http://techtrips.com.br/#modal-videos
//http://techtrips.com.br/#modal-vlog
//http://techtrips.com.br/#modal-demo
//http://techtrips.com.br/#modal-instagram
//http://techtrips.com.br/#modal-blog