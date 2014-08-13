// burrito, dynamite, and coal scalar
	bS = 5000;	
	dS = 10000;
	cS = 1000;

  var d3burrito = d3.select("#burrito-fill");
  var usaburrito = d3.select("#burrito-fill-usa");

  var d3dynamite = d3.select("#dynamite-fill");
  var usadynamite = d3.select("#dynamite-fill-usa");

  var d3coal = d3.select("#coal-fill");
  var usacoal = d3.select("#coal-fill-usa");

// Add USA
// Wish list is to have this run on FIRST click, but not before then! ORRRRR have first load be Alabama instead of USA
var AmericanBurrito = (Math.floor(data[44].burritos / bS) / 2);
var AmericanDynamite = data[44].dynamite / dS;
// var AmericanCoal = (Math.floor(data[44].burritos / bS) / 2);

// If I wanted to, I could use this but would have to generalize from d3burrito to usaburrito
// This runs on load?? I think 8/12/14
UsaBurritofunction(AmericanBurrito);
UsaDynamitefunction(AmericanDynamite);
// UsaCoalfunction(AmericanCoal);

// This is called and calls everything else.
function addD3(i) {

  burritos = data[i].burritos;
  dynamite = data[i].dynamite;
  coal = data[i].coal;

console.log(dynamite)

	//calculations
	burritos = Math.floor(data[i].burritos / bS); 
	burRemainder = Math.floor(((data[i].burritos / bS) - burritos) * 3);
	dynamite = data[i].dynamite / dS;
	dynBundle = Math.floor(dynamite / 5);
	dynSingle = Math.floor(dynamite % 5);
	coal = Math.floor(data[i].coal / cS * 10) / 10;  

  // Begin by removing previous rect's (can i do it by class?)    
  d3.select("#burrito-fill").selectAll("div").data([]).exit().remove();
	d3.select("#dynamite-fill").selectAll("div").data([]).exit().remove();
	// d3.select("#coal-fill").selectAll("div").data([]).exit().remove();

	// Do the Burrito Work
	if (burritos % 2 == 0) {
		b = burritos / 2;  
	} else {
		b = (burritos - 1) / 2;
		middleBurrito(b);
	};
	fullBurrito(b);

	d3burrito.selectAll("div").append("img")
			.attr("src", "/img/burritoSmall.jpg")

	// if (burRemainder != 0 ) {
	// 	partialBurrito(b, burRemainder);	
	// };

	// Do the Dynamite Work
	if (dynBundle % 2 == 0) {
		q = dynBundle / 2;
	} else {
		q = (dynBundle - 1) / 2;
		middleDynamite(q);
	};
	fullDynamite(q)
	
	if (dynSingle % 2 == 0) {
		qs = dynSingle / 2;
	} else {
		qs = (dynSingle - 1) / 2;
		middleDynamiteSingle(qs);
	};
	fullDynamiteSingle(qs);

	d3dynamite.selectAll("div").append("img")
		.attr("src", "/img/bundle.jpg")

		// Remove the above appended jpg, add the below jpg
	d3dynamite.selectAll(".dynamiteBarSingle").selectAll("img").data([]).exit().remove();

	d3dynamite.selectAll(".dynamiteBarSingle").append("img")
			.attr("src", "/img/dynamite.jpg")

	// Do the Coal Work

}

// /////////////////////////////////////////
// Functions
// ////////////////////////////////////////

// Dymamite functions
function fullDynamite(q) {
	for (var i = 0; i < q; i++) {
	var d = q;

	d3dynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "0")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });
	d3dynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "30px")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });    
	};
}

function middleDynamite(q)  {
	d3dynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "15px")
    .style("bottom", function(d) {
    	var barBottom = ((q) * 52);
    		return barBottom + "px";
    });
}

// Single dynamite
function fullDynamiteSingle(qs) {
	for (var i = 0; i < qs; i++) {
	var d = q;

	d3dynamite.append("div")
    .attr("class", "dynamiteBarSingle")
    .style("left", "60px")
    .style("bottom", function(d) {
    	var barBottom = i *  39;
    		return barBottom + "px";
    });
	d3dynamite.append("div")
    .attr("class", "dynamiteBarSingle")
    .style("left", "80px")
    .style("bottom", function(d) {
    	var barBottom = i * 39;
    		return barBottom + "px";
    });    
	};
}

function middleDynamiteSingle(qs)  {
	d3dynamite.append("div")
    .attr("class", "dynamiteBarSingle")
    .style("left", "70px")
    .style("bottom", function(d) {
    	var barBottom = ((qs) * 39);
    		return barBottom + "px";
    });
}


// UsaDynamitefunction(AmericanDynamite);

// Burrito Functions
function fullBurrito(b) {
	for (var i = 0; i < b; i++) {
	var d = i;

	d3burrito.append("div")
    .attr("class", "burritoBar")
    .style("left", "0")
    .style("bottom", function(d) {
    	var barBottom = i * 25;
    		return barBottom + "px";
    });
	d3burrito.append("div")
    .attr("class", "burritoBar")
    .style("left", "60px")
    .style("bottom", function(d) {
    	var barBottom = i * 25;
    		return barBottom + "px";
    });    
	};
	
}

function middleBurrito(b)  {
	d3burrito.append("div")
    .attr("class", "burritoBar")
    .style("left", "30px")
    .style("bottom", function(d) {
    	var barBottom = ((b) * 25);
    		return barBottom + "px";
    });
}

// function partialBurrito(b, burRemainder) {
// 	console.log('g')
// 	d3burrito.append("div")
//     .attr("class", "burritoBar")
//     .style("left", "30px")
//     .style("bottom", function(d) {
//     	var barBottom = ((b+1) * 25);
//     		return barBottom + "px";
//     });	
// }

function UsaBurritofunction(AmericanBurrito) {

	for (var i = 0; i < AmericanBurrito; i++) {
		var d = i;

		usaburrito.append("div")
	    .attr("class", "burritoBar")
	    .style("left", "0")
	    .style("bottom", function(d) {
	    	var barBottom = i * 25;
	    		return barBottom + "px";
	    });
		usaburrito.append("div")
	    .attr("class", "burritoBar")
	    .style("left", "60px")
	    .style("bottom", function(d) {
	    	var barBottom = i * 25;
	    		return barBottom + "px";
    });    
	};


	usaburrito.selectAll("div").append("img")
		.attr("src", "/img/burritoSmall.jpg")
};

function UsaDynamitefunction(o) {
console.log(o)
// var AmericanDynamiteBundle = ((Math.floor(AmericanDynamite / 5)) / 2); //Finished???
	

	dynBundle = Math.floor(o / 5);
	dynSingle = Math.floor(o % 5);


	// Do the Dynamite Work
	if (dynBundle % 2 == 0) {
		q = dynBundle / 2;
	} else {
		q = (dynBundle - 1) / 2;
		// add the middle
			usadynamite.append("div")
	    .attr("class", "dynamiteBar")
	    .style("left", "15px")
	    .style("bottom", function(d) {
	    	var barBottom = ((q) * 52);
	    		return barBottom + "px";
	    });
	};

	console.log("this is the letter q: " + q)
	console.log("Bundles: " + dynBundle)
	console.log("Singles: " + dynSingle)
// Add the full
	for (var i = 0; i < q; i++) {
	var d = q;

	usadynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "0")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });
	usadynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "30px")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });    
	};
	
	if (dynSingle % 2 == 0) {
		qs = dynSingle / 2;
	} else {
		qs = (dynSingle - 1) / 2;
			usadynamite.append("div")
		    .attr("class", "dynamiteBarSingle")
		    .style("left", "70px")
		    .style("bottom", function(d) {
		    	var barBottom = ((qs) * 39);
		    		return barBottom + "px";
		    });
		  };
		for (var i = 0; i < qs; i++) {
			var d = q;

			// usadynamite.append("div")
		 //    .attr("class", "dynamiteBarSingle")
		 //    .style("left", "60px")
		 //    .style("bottom", function(d) {
		 //    	var barBottom = i *  39;
		 //    		return barBottom + "px";
		 //    });
			// usadynamite.append("div")
		 //    .attr("class", "dynamiteBarSingle")
		 //    .style("left", "80px")
		 //    .style("bottom", function(d) {
		 //    	var barBottom = i * 39;
		 //    		return barBottom + "px";
		 //    });    
			};

			usadynamite.selectAll("div").append("img")
				.attr("src", "/img/bundle.jpg")

				// Remove the above appended jpg, add the below jpg
			usadynamite.selectAll(".dynamiteBarSingle").selectAll("img").data([]).exit().remove();

			usadynamite.selectAll(".dynamiteBarSingle").append("img")
					.attr("src", "/img/dynamite.jpg")




};
