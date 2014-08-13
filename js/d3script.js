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
var AmericanCoal = Math.floor(data[44].burritos / cS);

// If I wanted to, I could use this but would have to generalize from d3burrito to usaburrito
// This runs on load?? I think 8/12/14
UsaBurritofunction(AmericanBurrito);
UsaDynamitefunction(AmericanDynamite);
UsaCoalfunction(AmericanCoal);

// This is called and calls everything else.
function addD3(i) {

  burritos = data[i].burritos;
  dynamite = data[i].dynamite;
  coal = data[i].coal;


	//calculations
	burritos = Math.floor(data[i].burritos / bS); 
	burRemainder = Math.floor(((data[i].burritos / bS) - burritos) * 3);
	dynamite = data[i].dynamite / dS;
	dynBundle = Math.floor(dynamite / 5);
	dynSingle = Math.floor(dynamite % 5);
	coal = Math.floor(data[i].coal / cS);  

  // Begin by removing previous rect's (can i do it by class?)    
  d3.select("#burrito-fill").selectAll("div").data([]).exit().remove();
	d3.select("#dynamite-fill").selectAll("div").data([]).exit().remove();
	d3.select("#coal-fill").selectAll("div").data([]).exit().remove();

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

	if (coal % 4 == 0) {
		c = coal / 4;
	};
	if (coal % 4 >= 1) {
		c = Math.floor((coal - 1) / 4); 
		oneCoal(c);		
	};
	if (coal % 4 >= 2) {
		c = Math.floor((coal - 2) / 4);
		twoCoal(c);
		console.log("coal");
	};
	if (coal % 4 >= 3) {
		c = Math.floor((coal - 3) / 4);
		threeCoal(c);
	};
fullCoal(c);

	d3coal.selectAll(".coalBar1").append("img")
			.attr("src", "/img/coal1.jpg")	
	d3coal.selectAll(".coalBar2").append("img")
			.attr("src", "/img/coal2.jpg")	
}

// /////////////////////////////////////////
// Functions
// ////////////////////////////////////////
// Coal functions 

function fullCoal(c) {
	for (var i = 0; i < c; i++) {
		var d = c;

		for (var j = 0; j < 4; j++) {
				d3coal.append("div")
	    .attr("class", function(d) {
			  	if (j % 2 == 0) {
			  		return "coalBar1"
			  	} else {
			  		return "coalBar2"
			  	}    	    	
	    	})
	    .style("left", function(d) {
	     	if (i % 2 == 0) {
					var coalLeft = j * 25;    		
	    	} else {	
	    		var coalLeft = (j * 25) + 8;    		
	    	};
	    		return coalLeft + "px";
	    })
	    .style("bottom", function(d) {
	    	var barBottom = i * 20;    		
	    		return barBottom + "px";
	    });
		};
	};
}

function oneCoal(c) {
	d3coal.append("div")
		.attr("class", "coalBar2")
		.style("left", function(d){
			if (c % 2 == 0) {
				var coalLeft = 25;
			} else {
				var	coalLeft = 33;
			};
			return coalLeft + "px";
		})
		.style("bottom", function(d) {
	    	var barBottom = (c) * 20;    		
	    		return barBottom + "px";
	    });
}

function twoCoal(c) {
	d3coal.append("div")
		.attr("class", "coalBar1")
		.style("left", function(d){
			if (c % 2 == 0) {
				var coalLeft = 50;
			} else {
				var	coalLeft = 58;
			};
			return coalLeft + "px";
		})
		.style("bottom", function(d) {
	    	var barBottom = (c) * 20;    		
	    		return barBottom + "px";
	    });
}

function threeCoal(c) {
	d3coal.append("div")
		.attr("class", "coalBar1")
		.style("left", function(d){
			if (c % 2 == 0) {
				var coalLeft = 0;
			} else {
				var	coalLeft = 8;
			};
			return coalLeft + "px";
		})
		.style("bottom", function(d) {
	    	var barBottom = (c) * 20;    		
	    		return barBottom + "px";
	    });
}

function UsaCoalfunction(AmericanCoal) {
	console.log(AmericanCoal)

	c = Math.floor((AmericanCoal - 3) / 4);
	console.log("this is American coal c: " + c);
		
		// Do the Coal Work

		usacoal.append("div")
			.attr("class", "coalBar2")
			.style("left", "33px")
			.style("bottom", "60px");
		usacoal.append("div")
			.attr("class", "coalBar1")
			.style("left", "8px")
			.style("bottom", "60px");
		usacoal.append("div")
			.attr("class", "coalBar1")
			.style("left", "58px")
			.style("bottom", "60px");

		for (var i = 0; i < 3; i++) {
		var d = c;

		for (var j = 0; j < 4; j++) {
				usacoal.append("div")
	    .attr("class", function(d) {
			  	if (j % 2 == 0) {
			  		return "coalBar1"
			  	} else {
			  		return "coalBar2"
			  	}    	    	
	    	})
	    .style("left", function(d) {
	     	if (i % 2 == 0) {
					var coalLeft = j * 25;    		
	    	} else {	
	    		var coalLeft = (j * 25) + 8;    		
	    	};
	    		return coalLeft + "px";
	    })
	    .style("bottom", function(d) {
	    	var barBottom = i * 20;    		
	    		return barBottom + "px";
	    });
		};
	};

	usacoal.selectAll(".coalBar1").append("img")
			.attr("src", "/img/coal1.jpg")	
	usacoal.selectAll(".coalBar2").append("img")
			.attr("src", "/img/coal2.jpg")	
}


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
	    .style("left", "25px")
	    .style("bottom", function(d) {
	    	var barBottom = ((q) * 52);
	    		return barBottom + "px";
	    });
	};

// Add the full
	for (var i = 0; i < q; i++) {
	var d = q;

	usadynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "10px")
    .style("bottom", function(d) {
    	var barBottom = i * 52;
    		return barBottom + "px";
    });
	usadynamite.append("div")
    .attr("class", "dynamiteBar")
    .style("left", "40px")
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
		    .style("left", "80px")
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
