//SVG Width and height
  var svgHeight = 300;
  var svgWidth = 318;

  //Box parameters
  var barPadding = 1;
  var imgWidth = 50;
  var imgHeight = 50;

  //D3 begins
  // var svg = d3.select("#burrito-fill").append("div")
  // .attr("height", svgHeight)
  // .attr("width", svgWidth)

  var d3burrito = d3.select("#burrito-fill");
    

function addD3(i) {

// burrito, dynamite, and coal scalar
	bS = 5000;	
	dS = 10000;
	cS = 1000;

  burritos = data[i].burritos;
  dynamite = data[i].dynamite;
  coal = data[i].coal;

	// Burrito calculations
	burritos = Math.floor(data[i].burritos / bS); 
	burRemainder = Math.floor(((data[i].burritos / bS) - burritos) * 3);
	dynamite = data[i].dynamite / dS;
	dynBundle = Math.floor(dynamite / 5);
	dynSingle = Math.floor(dynamite % 5);
	coal = Math.floor(data[i].coal / cS * 10) / 10;  

	console.log(burritos);
	console.log(burRemainder);
  console.log(dynBundle);
  console.log(dynSingle);
  console.log(coal);


  // Begin by removing previous rect's (can i do it by class?)    
  // d3.select("#burrito-fill").selectAll("div").data([]).exit().remove();
            // d3.select("body").selectAll("rect").data([]).exit().remove();

for (var i = 0; i < 1; i++) {
	var d = i;

	d3burrito.append("div")
    .attr("class", "burritoBar")
    .style("left", function(d) {
    	var barLeft = i * 10;
    		return barLeft + "%";
    })
    ;
};

	d3burrito.selectAll("div").append("img")
		.attr("src", "/img/burritoSmall.jpg")

}

function buildFullRows() {
    k += 1;
    for (var j = 0; j < 3; j++) {
        
        svg.append("rect")
         .attr("x", j*30)
         .attr("y", svgHeight - (k*40)-40)
         .attr("width", imgWidth)
         .attr("height", imgHeight)
         .style("fill", "transparent")       // this code works OK
         .style("fill", "url(#imageID1)");             
    };  
}

function buildOne () {
    k += 1
    svg.append("rect")
     .attr("x", 30)
     .attr("y", svgHeight - (k*40)-40)
     .attr("width", imgWidth)
     .attr("height", imgHeight)
     .style("fill", "transparent")       // this code works OK
     .style("fill", "url(#imageID1)");
}   

function buildTwo () {
    k += 1
    for (var j = 0; j < 2; j++) {
        svg.append("rect")
         .attr("x", (j*30)+15)
         .attr("y", svgHeight - (k*40)-40)
         .attr("width", imgWidth)
         .attr("height", imgHeight)
         .style("fill", "transparent")       // this code works OK
         .style("fill", "url(#imageID1)");  
    };
}   