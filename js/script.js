var o = 0;

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

		var cloudmade = L.tileLayer("http://a.tiles.mapbox.com/v3/energy.j3enm2ea/{z}/{x}/{y}.png", {
			//attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
			//key: 'BC9A493B41014CAABB98F0471D759707',
			//styleId: 22677
		}).addTo(map);


    //Load/add the data        

        var mySelect = $('#drop');


        $.each(data, function(i) {
            mySelect.append(
                $('<li class="doink"></li>').val(data[i].id).html(data[i].state)
            );
        });

        $('#dropdiv').click(function (e){             
          $('#drop').toggleClass('open')
          $('#drop').toggleClass('close')
          $('#dropdiv').toggleClass('open')    
        });          

        $(document).click(function(event) {             
          if(!$(event.target).closest('#drop').length && !$(event.target).closest('#dropdiv').length) {
            if($('#drop').is(":visible")) {
              $('#drop').addClass('close')
              console.log('h')
            }
          }        
        })

        $('.doink').click(function (e){             
          $('#drop').removeClass('open')
          $('#drop').addClass('close')
          $('#dropdiv').removeClass('open')           
           // var dataCurrent = this.value.origin;
           //  console.log(this)
           //  console.log(dataCurrent)
        });


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