(function ($) { 
          
  // Move the Clouds
  $(document).ready(function del(){
    $("#flames").
    delay(1500).
    animate({opacity:1},500, 'linear').
    delay(2000).
    animate({opacity:0},500, 'linear'),
      $("#del_flame").        
        delay(1000).
        animate({left:'+=150%'},2000).
        animate({opacity: 0},0).
        animate({left:'-=300%'},0).
        delay(2000).
        animate({opacity: 1},0).
        animate({left:'+=150%'},2000,del)           
  }); 

}(jQuery));  