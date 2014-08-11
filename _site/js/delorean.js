(function ($) { 
          
  // Move the Clouds
  $(document).ready(function del(){
      $("#delorean").
        delay(1000).
        animate({left:'+=150%'},2000).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(2000).
        animate({opacity: 1},0).
        animate({left:'+=150%'},2000,del)           
  }); 

}(jQuery));  