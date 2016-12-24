'use strict';

var topConfig = {
    writable: true
    , getHeight: function(){
        return $( window ).height();
    }
    , getSize: function(){
        var _width = $( window ).width(); 
        return  _width > 992 ? 'lg' :  _width > 768 ? 'md' : 'sm' ;
    }
    , fixToBot: function(){
        var me = this;
        var size = me.getSize();
        var hg = this.getHeight();

        // menu = 88 px;  13%
        // live = 100     15 %
        // 651px -> base
        // 70%

        if(this.getSize() !== 'sm'){
            // 25% logos
            var minhpatrocinadores = me.getHeight() * 0.25;
            // 15% texto
            var textoH = me.getHeight() * 0.10;
            // 30% logo
            var logo = me.getHeight() * 0.3;

            $('.logo-center-desk img').height(logo);
            $('.text-techtrip').height(textoH);

            if(minhpatrocinadores < 150){
                $('.text-techtrip').hide();
                $('.logo-center-desk').css('paddingBottom', me.getHeight() * 0.05)
                $('.patrocinadores').css('paddingTop', me.getHeight() * 0.10);
            }else{
                $('.text-techtrip').show();
                $('.logo-center-desk').css('paddingBottom', 0)
                $('.patrocinadores').css('paddingTop', 0);
            }

            if(minhpatrocinadores < 129){
                $('.logo-center-desk').hide();
                $('.patrocinadores').css('paddingTop', me.getHeight() * 0.35);
            }else{
                $('.logo-center-desk').show();
                $('.patrocinadores').css('paddingTop', 0);
            }
        }else{
            $('.text-techtrip').hide();
            $('.logo-center-desk').hide();

            if(window.innerHeight > window.innerWidth){
                $('.patrocinadores').css('paddingTop', me.getHeight() * 0.45);
                $('.patrocinio-item').addClass('col-xs-6');
                $('.patrocinio-item').addClass('col-sm-6');

                $('.patrocinio-item').removeClass('col-xs-3');
                $('.patrocinio-item').removeClass('col-sm-3');
            }else{
                $('.patrocinadores').css('paddingTop', me.getHeight() * 0.15);
                $('.patrocinio-item').removeClass('col-xs-6');
                $('.patrocinio-item').removeClass('col-sm-6');

                $('.patrocinio-item').addClass('col-xs-3');
                $('.patrocinio-item').addClass('col-sm-3');
            }
        }

        
        // $('.patrocinadores').css('marginTop', size == 'lg' ? hg - 650 : size == 'md' ? hg - 600 : 0);
        // $('.patrocinio').height( me.getHeight() -150);
        
        // if(size == 'sm'){
        //     $('.patrocinio').css('paddingTop', 120);
        // }

        // if(hg < 745){
        //     $('.text-techtrip').hide();
        // }else{
        //     $('.text-techtrip').show();
        // }

        // if(hg < 700){
        //     $('.logo-center-desk').hide();
        //     $('.patrocinadores').css('marginTop', size == 'lg' ? hg - 360 : size == 'md' ? hg - 300 : 150);
        // }else{
        //     $('.logo-center-desk').show();
        // }

    }
    , configureTop: function(){
        var me = this;
        $('.patrocinio').height( me.getHeight() ); //- (size == 'lg' ? 100 : -120) 
        // $('.live-notificacao').css('margin-top', (me.getSize() == 'lg' ? -80 : -50));

         $('.bg-all').height( me.getHeight() );
         me.fixToBot();
    }

    // , configureModalInsta : function(){
    //     var size = me.getSize();
    //     size = size * 0.9;
    //     $('##modal-instagram .modal-content').height(size);
    // }
}

$(document).ready(function() {
	topConfig.configureTop();
	//topConfig.configureModalInsta();
    $( window ).resize(function() {
        topConfig.configureTop();
        // topConfig.configureModalInsta();
    });
});