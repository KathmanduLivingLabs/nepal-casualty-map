// Insert your scripts here

// Initial Script

		// var map = L.map('map', {
		// 	scrollWheelZoom: false
		// }).fitBounds([
  //           [42.461, -56.979],[32.536, -134.4]
  //           ]);

		// var cloudmade = L.tileLayer("http://a.tiles.mapbox.com/v3/energy.map-461t6jk2/{z}/{x}/{y}.png", {
		// 	//attribution: 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
		// 	//key: 'BC9A493B41014CAABB98F0471D759707',
		// 	//styleId: 22677
		// }).addTo(map);



var width = 980,
    height = 450;

// var projection = d3.geo.satellite()
//     .distance(1.1)
//     .scale(5500)
//     .rotate([76.00, -34.50, 32.12])
//     .center([-2, 5])
//     .tilt(25)
//     .clipAngle(Math.acos(1 / 1.1) * 180 / Math.PI - 1e-6)
//     .precision(.1);

var projection = d3.geo.satellite()
    .distance(1.1)
    .scale(4500)
    .rotate([84.00, -34.50, 5])
    .center([-2, 5])
    .tilt(33)
    .clipAngle(25);

var graticule = d3.geo.graticule()
    .extent([[-113, 27], [-47 + 1e-6, 57 + 1e-6]])
    .step([3, 3]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#flying1").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

d3.json("js/data/us.json", function(error, us) {
  svg.append("path")
      .datum(topojson.feature(us, us.objects.land))
      .attr("class", "boundary")
      .attr("d", path);
});

d3.select(self.frameElement).style("height", height + "px");

console.log('je')