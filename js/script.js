var totalBTU = document.getElementById('totalBTU');
var statename = document.getElementById('dropdiv');
var flight = document.getElementById('flight');
var world = document.getElementById('world');
var marty = document.getElementById('marty');
var power = document.getElementById('power');

// Initial Script

		var map = L.map('map', {
			scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
      boxZoom: false,
      zoomControl: false

		}).fitBounds([
            [42.461, -70.979],[32.536, -90.4]
            ]);

		var cloudmade = L.tileLayer("http://a.tiles.mapbox.com/v3/energy.j3enm2ea/{z}/{x}/{y}.png").addTo(map);


    //Load/add the data        
(function ($) { 
$( document ).ready(function() {

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
    onClicky(i);     
      
  });
  $(document).click(function(event) {             
    if(!$(event.target).closest('#drop').length && !$(event.target).closest('#dropdiv').length) {
      if($('#drop').is(":visible")) {
        $('#drop').addClass('close')
      }
    }        
  })
// onClickyhigh();

});
}(jQuery));  

function onClicky(i) {
  statename.innerHTML = '<h4>' + data[i].state + '</h4>';
  totalBTU.innerHTML = '<h1>' + data[i].btu + ' BTU</h1>';
  flight.innerHTML = 'Fly a Boeing 747 from ' + data[i].origin + ' to ' +  data[i].destination;
  world.innerHTML = data[i].earth;
  marty.innerHTML = data[i].marty;
  power.innerHTML = '<h1>' + data[i].wattage + ' W</h1>';
}



    // (function ($) { 
    //   $(document).ready(function() { 
    //     for (var i = 0; i < data.length; i++) {
    //       console.log(data[i])

    //     };
    //   });  
    // }(jQuery));  



// Each append to a UL an LI for each 50 states (and dc/usa)
// Append each LI with a number/ID
// This ID is the same as something in the data, link it by if ID == data.ID {load the array for that item}
// Sense for a click of a new LI, then run a function .... $('#li').change(function (e){ do the work...map and d3 });