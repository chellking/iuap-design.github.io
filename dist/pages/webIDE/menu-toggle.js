(function(document, window, $) {
    'use strict';
  $(document).ready(function(){ 
        
   
    // $(".u-container-fluid.u-widget-bg").mCustomScrollbar({theme:"minimal-dark"});

    var togglebutton = $("#menubutton").find("i");
    var togglebar = $("#menubar");

    togglebutton.unbind().bind("click",function(){
      togglebar.toggleClass("u-menubar-open");
      console.log($(this));
      $("main").toggleClass("content-fullScreen");
      togglebutton.each(function(){
        
        if($(this).hasClass("hide")){
          $(this).removeClass("hide");
        }else{
          $(this).addClass("hide");
        }
      })
    })
  });
    
    
      
})(document, window, jQuery);