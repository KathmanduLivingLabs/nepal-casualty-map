var totalBTU = document.getElementById('totalBTU');
var statename = document.getElementById('dropdiv');
var flight = document.getElementById('flight');
// var world = document.getElementById('world');
var marty = document.getElementById('marty');
// var power = document.getElementById('power');
var burritosDiv = document.getElementById('burritosDiv');
var dynamiteDiv = document.getElementById('dynamiteDiv');
var dynamiteDiv2 = document.getElementById('dynamiteDiv2');
var coalDiv = document.getElementById('coalDiv');
var burritoInfo = document.getElementById('burrito-info');
var dynamiteInfo = document.getElementById('dynamite-info');
var coalInfo = document.getElementById('coal-info');

var bbelow  =  document.getElementById('b-below');
var d1below =  document.getElementById('d1-below');
var d2below =  document.getElementById('d2-below');
var cbelow  =  document.getElementById('c-below');

var w = -1;



// Initial Script

		var map = L.map('map', {
			scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
      boxZoom: false,
      zoomControl: false

		}).fitBounds([
              [38.7, -70.979],[41.2, -80.4]
            ]);

		var cloudmade = L.tileLayer("http://a.tiles.mapbox.com/v3/energy.j3enm2ea/{z}/{x}/{y}.png").addTo(map);


    //Load/add the data        
(function ($) { 
$( document ).ready(function() {


// should be 44 for us instead of 1 for alaska.
  addNumbers(data[44].id);
  addMap(data[44].id);
  addD3(data[44].id);

  var mySelect = $('#drop');

  $.each(data, function(i) {
      mySelect.append(
          $('<li class="doink"></li>').val(data[i].id).html(data[i].state)
      );
  });

  // Turn stuff on when you click on the dropdown
  $('#dropdiv').click(function (e){             
    $('#drop').toggleClass('open')
    $('#drop').toggleClass('close')
    $('#dropdiv').toggleClass('open')    
  });                  

  $('.doink').click(function (e){             
    $('#drop').removeClass('open')
    $('#drop').addClass('close')
    $('#dropdiv').removeClass('open')           
    var i = this.value;

    addNumbers(i); 
    addMap(i);      
    addD3(i);
    var w = i; //why doesn't this work?

  });

// Swipe to switch
  // $("#swipe").swipe({
  //   swipe:function(event, direction, distance, duration, fingerCount) {
  //     $(this).text("You swiped " + direction );
  //   }
  // });

// Add left/right navigation
  $(document).keydown(function ( event ) {
    if (event.which == 39) {ToTheRight();}
    else if (event.which == 37) {ToTheLeft(event.which);}
    ;
  });

  $('#right-tri-box').click(ToTheRight);
  $('#left-tri-box').click(ToTheLeft);
  
// CANT FIGURE OUT SWIPE :(
  // $('#totalBTU').on("swipe", ToTheLeft());




  


  $(document).click(function(event) {             
    if(!$(event.target).closest('#drop').length && !$(event.target).closest('#dropdiv').length) {
      if($('#drop').is(":visible")) {
        $('#drop').addClass('close')
      }
    }        
  })
// addNumbershigh();

});
}(jQuery));  


function ToTheRight(e){
  if (w == 51) {
    w -= 7;
  } else if (w == 44) {
    w -= 44;        
  } else if (w == 43) {
    w += 2;
  } else {
    w += 1;
  };    

  addNumbers(w); 
  addMap(w);     
  addD3(w);   
}

function ToTheLeft(e){      
  if (w == -1) {
    w += 52;
  } else if (w == 0) {
    w += 44;
  } else if (w == 44) {
    w += 7;        
  } else if (w == 45) {
    w -= 2;
  } else {
    w -= 1;
  };    

    addNumbers(w); 
    addMap(w);  
    addD3(w);
}

function addNumbers(i) {
  statename.innerHTML = '<h4>' + data[i].state + '</h4>';
  totalBTU.innerHTML = '<h1>' + numberWithCommas(data[i].btu) + ' BTU</h1>';
  flight.innerHTML = 'Fly a Boeing 747 from ' + data[i].origin + ' to ' +  data[i].destination;
  // world.innerHTML = data[i].earth;
  marty.innerHTML = data[i].future;
  // power.innerHTML = '<h1>' + numberWithCommas(data[i].wattage) + ' W</h1> <p>You used ' + numberWithCommas(data[i].wattage / 100) + 
  // ' times as much energy as a 100-watt lightbulb this second...and this second...and now. You get the idea.</p>';

  burritosDiv.innerHTML = numberWithCommas(data[i].burritos);
  burritoInfo.innerHTML = data[i].state;
  dynamiteDiv.innerHTML = numberWithCommas(data[i].dynamite);
  dynamiteDiv2.innerHTML = Math.floor(data[i].dynamite / 1000);;
  dynamiteInfo.innerHTML = data[i].state;
  coalDiv.innerHTML = numberWithCommas(data[i].coal)
  coalInfo.innerHTML = data[i].state;

  burinter =   numberWithCommas(Math.abs(data[i].burritos - data[44].burritos));
  burdynamite =   numberWithCommas(Math.abs(data[i].dynamite - data[44].dynamite));
  burcoal =   numberWithCommas(Math.abs(data[i].coal - data[44].coal));

if (data[i].burritos - data[44].burritos > 0) {
  aboveBelow = "above";
  redBlue = "red";
} else if (data[i].burritos - data[44].burritos < 0) {
  aboveBelow = "below"
  redBlue = "blue";
} else {
  aboveBelow = "above" 
  redBlue = "";
};

bbelow.innerHTML = burinter + ' burritos <span class="' + redBlue + '">' + aboveBelow + '</span> <br>the U.S. Average.';
d1below.innerHTML = burdynamite + ' sticks <span class="' + redBlue + '">' + aboveBelow + '</span> <br>the U.S. Average.';
d2below.innerHTML = burdynamite + ' sticks <span class="' + redBlue + '">' + aboveBelow + '</span> <br>the U.S. Average.';
cbelow.innerHTML = burcoal + ' lbs. of coal <span class="' + redBlue + '">' + aboveBelow + '</span> <br>the U.S. Average.';

}

//function to add commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 