var tipWidth = 150,
    tipHeight = 70;

// Ramp paraemters, first for dead, then for injuries
var rampameters = [
  [0,10,50,100,500,1000,2000], //deaths
  [0,0.001,0.01,0.05,0.1,0.3,0.75], //percentage killed
  [0,10,50,100,500,1000,4000], //injuries
  [0,0.001,0.05,0.1,0.3,0.5,2], //percentage injured
  [0,100,500,100,5000,10000,50000], //Complete houses
  [0,100,500,100,5000,10000,50000] //partial houses
  ];

//m = 0 is dead map, m = 1 is injured map;
var m = 0;

// define the color ramp function
var ramp = function(d, m) {
  if (m === 0) {
    var o = d.properties.dead;
  } else if (m === 1) {
    var o = d.properties.deadpercent;
  } else if (m === 2) {
    var o = d.properties.injured;
    // if (o.properties.district = "Rasuwa ") {console.log('FART')};
    // console.log(d.properties)
  } else if (m === 3) {
    var o = d.properties.injuredpercent;    
  } else if (m === 4) {    
    var o = d.properties.OthComplete;
  } else if (m === 5) {
    var o = d.properties.OthPartial;
  }
  
  for (var i = 0; i < rampameters[m].length; i++) {
    if (o <= rampameters[m][i]) {
      var qclass = "q" + i;
      break;
    };
  };
  return qclass;
}

// Projection parameters are located in the individual scripts for each endpoint (indexscript, iframescript)

var graticulex = 1;
var graticuley = 1; 

var projection = d3.geo.albers()
  .scale(scale)    
  .rotate([yaw, pitch, roll]) //yaw, pitch, roll    ;  

var graticule = d3.geo.graticule()
  .step([graticulex, graticuley]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("body").select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("path")
  .datum(graticule)
  .attr("class", "graticule")
  .attr("d", path);
  
queue()
    .defer(d3.json, "data/districts_topo7.json")    
    .await(ready);

function ready(error, districts_topo7) {
// console.log(districts_topo7)
  svg.append("g")
      .attr("class", "districts_id")
    .selectAll("path")
      .data(topojson.feature(districts_topo7, districts_topo7.objects.districts_id).features)
    .enter().append("path")
      .attr("class", function(d) { 
        return ramp(d,m)
        // return quantize(rateById.get(d.id)); 
      })
      .attr("d", path)
      .on("mouseover", tooltip)
      .on("mouseout", remover);

// Draw the state borders
  svg.append("path")
      .datum(topojson.mesh(districts_topo7, districts_topo7.objects.districts_id, function(a, b) { 
        return a !== b; }))
      .attr("class", "states")
      .attr("d", path)

    svg.append("path")
      .datum(topojson.mesh(districts_topo7, districts_topo7.objects.districts_id, function(a, b) { 
        return a == b; }))
      .attr("class", "country")
      .attr("d", path)      
}

function tooltip(d) {
  var dead = d.properties.dead;
  var injured = d.properties.injured;
  var district = d.properties.district;
  console.log("OthComplete: " + d.properties.OthComplete)
  console.log("OthPartial: " + d.properties.OthPartial)
  console.log("deadpercent: " + d.properties.deadpercent)
  console.log("injuredpercent: " + d.properties.injuredpercent)


  centroid = path.centroid(d);

  // Set the top or bottom tooltip
  if (width > 900) {
    if (centroid[1] < 250) {
      centroid_adjusted = [(centroid[0]-(tipHeight)),(centroid[1]+25)];
    } else {
      centroid_adjusted = [(centroid[0]-(tipHeight)),(centroid[1]-(tipWidth-50))];
    };        
  }
  // else if (width > 700) {  
  //   if (centroid[1] < 225) {
  //     // centroid_adjusted = [(centroid[0]-radius - 5),(centroid[1]+25)];
  //   } else {
  //     // centroid_adjusted = [(centroid[0]-radius - 5),(centroid[1]-(2 * radius + 80))];
  //   };
  // }
  else if (width > 480) {
    if (centroid[0] < (width+100) / 2) {
      centroid_adjusted = [(centroid[0]-(tipHeight)),(centroid[1]+25)];
    } else {
      centroid_adjusted = [(centroid[0]-(tipHeight)),(centroid[1]-(tipWidth-50))];
    };
  } 
  // else {
  //   if (centroid[0] < 200) {
  //     centroid_adjusted = [(width - 175),(5)];        
  //   } else {
  //     centroid_adjusted = [(5),(5)];               
  //   };
  // };

  // tip_text  = [(centroid_adjusted[0] -50),(centroid_adjusted[1])];
  tip_text = [(centroid_adjusted[0] + (tipWidth /2)),(centroid_adjusted[1] + 20)];
  tip_text2  = [(centroid_adjusted[0] + (tipWidth /2)),(centroid_adjusted[1] + 40)];
  tip_text3  = [(centroid_adjusted[0] + (tipWidth /2)),(centroid_adjusted[1] + 60)];
        
  var tooltipContainer = svg.append("g")
    .attr("id", "tooltip")
  .append("rect")
  .attr("transform", function() { 
    return "translate(" + centroid_adjusted + ")"; })
  .attr("width", (tipWidth))
  .attr("height", (tipHeight))
  .attr("rx", 6)
  .attr("ry", 6)
  // .attr("fill", "brown");

// tip title
  svg
    .append("text")
    .attr("class","tip-text")
    .text(function(d){
      return district})
    .attr("transform", function() { 
      return "translate(" + tip_text + ")"; });

  svg
    .append("text")
    .attr("class","tip-text2")
    .text(function(d){
        return "Total dead: " + dead;
    })
    .attr("transform", function() { 
      return "translate(" + tip_text2 + ")"; });
    
    svg
    .append("text")
    .attr("class","tip-text3")
    .text(function(d){
        return "Total injuries: " + injured;
    })
    .attr("transform", function() { 
      return "translate(" + tip_text3 + ")"; });           
}      
// d3.selectAll("g").on('mouseover', tooltip);

function remover() {
  d3.select("#tooltip").remove();
  d3.selectAll(".tip-text").remove();
  d3.selectAll(".tip-text2").remove();        
  d3.selectAll(".tip-text3").remove();     
}

function rebuild() {
  d3.selectAll(".districts_id").remove();
  d3.selectAll(".country").remove();
  d3.selectAll(".states").remove();
  queue()
    .defer(d3.json, "data/districts_topo7.json")
    .await(ready);
}


// WHAT YOU DO WHEN YOU CLICK TO CHANGE THE MAP
var deathmap = document.getElementById("deathmap");
var injurymap = document.getElementById("injurymap");
var deathpctmap = document.getElementById("deathpctmap");
var injurypctmap = document.getElementById("injurypctmap");
var completehouse = document.getElementById("completehouse");
var partialhouse = document.getElementById("partialhouse");

deathmap.onmousedown = function () {
  if (m != 0) {
      deathmap.className = "large-2 medium-2 small-2 nepbuttons active";
      injurymap.className = "large-2 medium-2 small-2 nepbuttons";
      deathpctmap.className = "large-2 medium-2 small-2 nepbuttons";
      injurypctmap.className = "large-2 medium-2 small-2 nepbuttons";
      completehouse.className = "large-2 medium-2 small-2  nepbuttons";
      partialhouse.className = "large-2 medium-2 small-2 nepbuttons";
      m = 0;

    rebuild();    
  };    
};

deathpctmap.onmousedown = function () {
  if (m != 1) {
    deathmap.className = "large-2 medium-2 small-2  nepbuttons";
    injurymap.className = "large-2 medium-2 small-2 nepbuttons";
    deathpctmap.className = "large-2 medium-2 small-2 nepbuttons active";
    injurypctmap.className = "large-2 medium-2 small-2 nepbuttons";
    completehouse.className = "large-2 medium-2 small-2  nepbuttons";
    partialhouse.className = "large-2 medium-2 small-2 nepbuttons";
    m = 1;

    rebuild();
  };
};

injurymap.onmousedown = function () {
  if (m != 2) {
    deathmap.className = "large-2 medium-2 small-2  nepbuttons";
    injurymap.className = "large-2 medium-2 small-2 nepbuttons active";
    deathpctmap.className = "large-2 medium-2 small-2 nepbuttons";
    injurypctmap.className = "large-2 medium-2 small-2 nepbuttons";
    completehouse.className = "large-2 medium-2 small-2  nepbuttons";
    partialhouse.className = "large-2 medium-2 small-2 nepbuttons";
    m = 2;

    rebuild();
  };
};

injurypctmap.onmousedown = function () {
  if (m != 3) {
    deathmap.className = "large-2 medium-2 small-2  nepbuttons";
    injurymap.className = "large-2 medium-2 small-2 nepbuttons";
    deathpctmap.className = "large-2 medium-2 small-2 nepbuttons";
    injurypctmap.className = "large-2 medium-2 small-2 nepbuttons active";
    completehouse.className = "large-2 medium-2 small-2  nepbuttons";
    partialhouse.className = "large-2 medium-2 small-2 nepbuttons";
    m = 3;

    rebuild();
  };
};

completehouse.onmousedown = function () {
  if (m != 4) {
    deathmap.className = "large-2 medium-2 small-2  nepbuttons";
    injurymap.className = "large-2 medium-2 small-2 nepbuttons";
    deathpctmap.className = "large-2 medium-2 small-2 nepbuttons";
    injurypctmap.className = "large-2 medium-2 small-2 nepbuttons";
    completehouse.className = "large-2 medium-2 small-2  nepbuttons active";
    partialhouse.className = "large-2 medium-2 small-2 nepbuttons";
    m = 4;

    rebuild();
  };
};

partialhouse.onmousedown = function () {
  if (m != 5) {
    deathmap.className = "large-2 medium-2 small-2  nepbuttons";
    injurymap.className = "large-2 medium-2 small-2 nepbuttons";
    deathpctmap.className = "large-2 medium-2 small-2 nepbuttons";
    injurypctmap.className = "large-2 medium-2 small-2 nepbuttons ";
    completehouse.className = "large-2 medium-2 small-2  nepbuttons";
    partialhouse.className = "large-2 medium-2 small-2 nepbuttons active";
    m = 5;

    rebuild();
  };
};

d3.select(self.frameElement).style("height", height + "px");


