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
        
        $('.patrocinadores').css('marginTop', size == 'lg' ? hg - 650 : size == 'md' ? hg - 600 : 0);
        $('.patrocinio').height( me.getHeight() -150);
        
        if(size == 'sm'){
            $('.patrocinio').css('paddingTop', 120);
        }

    }
    , configureTop: function(){
        var me = this;
        var size = me.getSize();
        $('.patrocinio').height( me.getHeight() ); //- (size == 'lg' ? 100 : -120) 
        // $('.live-notificacao').css('margin-top', (me.getSize() == 'lg' ? -80 : -50));

        
         $('.bg-all').height( me.getHeight() );
         me.fixToBot();
    }
}

$(document).ready(function() {
	topConfig.configureTop();
});