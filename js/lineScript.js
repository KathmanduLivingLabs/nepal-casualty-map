//origins
var chicago = {"longitude":-87.7321555, "latitude":41.8337329};
var nyc = {"longitude":-73.9780035, "latitude":40.7056308};

//End Points
var linesPoints = [
  {
    "origin":"NYC",
    "destination":"Albany, NY",
    "longitude":-73.754968,
    "latitude":42.6511674
  },
  {
    "origin":"NYC",
    "destination":"Baltimore, MD",
    "longitude":-76.6108073,
    "latitude":39.2908608
  },
  {
    "origin":"NYC",
    "destination":"Boston, MA",
    "longitude":-71.0595678,
    "latitude":42.3604823
  },
  {
    "origin":"Chicago",
    "destination":"Charleston WV",
    "longitude":-81.6337762,
    "latitude":38.3500245
  },
  {
    "origin":"NYC",
    "destination":"Charlotte NC",
    "longitude":-80.8431268,
    "latitude":35.2270869
  },
  {
    "origin":"Chicago",
    "destination":"Columbus OH",
    "longitude":-83.0007065,
    "latitude":39.9622601
  },
  {
    "origin":"Chicago",
    "destination":"Des Moines IA",
    "longitude":-93.6037149,
    "latitude":41.5910641
  },
  {
    "origin":"Chicago",
    "destination":"Detroit, MI",
    "longitude":-83.0567375,
    "latitude":42.3486635
  },
  {
    "origin":"Chicago",
    "destination":"Indianapolis, IN",
    "longitude":-86.1580447,
    "latitude":39.7683795
  },
  {
    "origin":"Chicago",
    "destination":"Louisville KY",
    "longitude":-85.759407,
    "latitude":38.2542376
  },
  {
    "origin":"NYC",
    "destination":"Montreal",
    "longitude":-73.5912827,
    "latitude":45.5224507
  },
  {
    "origin":"NYC",
    "destination":"Norfolk, VA",
    "longitude":-76.25730325,
    "latitude":36.93083365
  },
  {
    "origin":"NYC",
    "destination":"Pittsburgh, PA",
    "longitude":-79.9900861,
    "latitude":40.4416941
  },
  {
    "origin":"NYC",
    "destination":"Portland, ME",
    "longitude":-70.2548596,
    "latitude":43.6610277
  },
  {
    "origin":"NYC",
    "destination":"Richmond, VA",
    "longitude":-77.43428,
    "latitude":37.5385087
  },
  {
    "origin":"Chicago",
    "destination":"St. Louis MO",
    "longitude":-90.1978889,
    "latitude":38.6272733
  },
  {
    "origin":"NYC",
    "destination":"Washington, DC",
    "longitude":-77.0363716,
    "latitude":38.8951148
  }
]

for (var i = 0; i < linesPoints.length; i++) {
	// linesPoints[i]
	appendText(linesPoints[i], i)
};


function appendText(x, i) {

	// Define your end points
	if (x.origin == "NYC") {
		var orig = nyc;
	} else if (x.origin) {
		var orig = chicago;
	};

	if (i == 0) {var txt0 = '<p>{"type":"FeatureCollection","features":['} else {txt0 = ''};	
    var txt1 = '{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[['    
    var txtMid = '],[';
    var txt2 = ']]}}'
    if (i !== 16) {var txtComma = ','} else {txtComma = ''};    
    if (i == 16) {var txtN = ']}</p>'} else {txtN = ''};    

    var txtAll = txt0 + txt1 + orig.longitude + ',' + orig.latitude + txtMid + x.longitude + ',' + x.latitude + txt2 + txtComma + txtN;
    // var txtAll = "fart"
    $("#line").append(txtAll);         // Append the new elements 
    // console.log(txtAll)
}