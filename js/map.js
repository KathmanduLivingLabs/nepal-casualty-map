var origin;
var destination;
var firstpolyline;

//Get the first city 
for (var i = 0; i < routes.features.length; i++) {
	// console.log(routes.features[i].geometry.coordinates[0]);

	final_origin = routes.features[i].geometry.coordinates[0];
	line_length = routes.features[i].geometry.coordinates.length - 1;
	final_destination = routes.features[i].geometry.coordinates[line_length];
};

	function addMap(i) {		
		var x = data[i].line_id
		// console.log(data[i].line_id);
		final_origin = routes.features[x].geometry.coordinates[0];
		line_length = routes.features[x].geometry.coordinates.length - 1;
		final_destination = routes.features[x].geometry.coordinates[line_length];
		// console.log(final_origin);
		// console.log(final_destination);


		var LeafIcon = L.Icon.extend({
		    options: {
		        iconSize:     [18, 17],
		        iconAnchor:   [9, 8]
		    }
		});

		if (destination != null) {
			map.removeLayer(destination); 
			map.removeLayer(origin); 
			map.removeLayer(firstpolyline);
		};
 
		var blueIcon = new LeafIcon({iconUrl: 'img/star_blue.png'}),
		    redIcon = new LeafIcon({iconUrl: 'img/star_red.png'});

		// add origin		
			origin = L.marker(final_origin, {icon: blueIcon}).addTo(map);		

		// add destination
			destination = L.marker(final_destination, {icon: redIcon}).addTo(map);
		
		//resize bounds
			map.fitBounds([
	            final_destination,final_origin
            ]);
			
			var pointList = routes.features[x].geometry.coordinates
			// console.log(pointList)

			firstpolyline = new L.Polyline(pointList, {
			color: 'red',
			weight: 3,
			opacity: 0.5,
			smoothFactor: 0,
			dashArray: '10'

			});
			firstpolyline.addTo(map);

	};


// On click (AND scroll to certain part of the page)

	// Add final_destination and final_origin to map MARKERS
	// for CLICK final_origin (etc) = routes.features[this.line_id] .... etc

  //To make "line" out of markers
	// add other markers to map using each point as a rectangle hash mark
	//on interval
	//step through add o markers to map, o+=1, loop, until o == line.length
	// Don't recreate each marker each time, just add the marginal marker
	// or 
  // To make line out of line
	// use lines and similar add o markers to map (using "hashed" or solid style) 
	// o+=1, loop until o == line.length
	//BUT
	// line can either be added/subtracted/added every loop (easier)
	// Or see if its possible to add a point on end of line without removing original line (better/harder)

	//WISH LIST 
	// Add a plane to the marginal point each loop.

