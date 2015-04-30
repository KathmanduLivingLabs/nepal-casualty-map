var tipWidth = 150,
    tipHeight = 70;

// Ramp paraemters, first for dead, then for injuries
var rampameters = [[0,10,50,100,500,1000,2000],[0,10,50,100,500,1000,4000],[0,10,50,100,500,1000,2000],[0,1,2,3,4]]
var supplyarray = ["Maintained","Minimum","Crisis","Crisis Everything"]

//m = 0 is dead map, m = 1 is injured map;
var m = 0;

// define the color ramp function
var ramp = function(d, m) {
  if (m === 0) {
    var o = d.properties.dead;
  } else if (m === 1) {
    var o = d.properties.injured;
  } else if (m === 2) {
    var o = d.properties.Treatment;
  } else if (m === 3) {
    var q = d.properties.Supplies;
      if (q === supplyarray[0]) {o = 1} 
      else if(q === supplyarray[1]) {o = 2}
      else if(q === supplyarray[2]) {o = 3}
      else if(q === supplyarray[3]) {o = 4}
      else {o = 0}
  } ;
  
// SOMETHING IN THE ABOVE IS NOT QORKING ??????I DONT KNOW OR BELOW....MAYBE HAVING TO DO WITH BINDING NON 0 DATA ONTO THE MAP. THE CLASSES ARENT' PICKING UP.

  for (var i = 0; i < rampameters[m].length; i++) {
    if (o <= rampameters[m][i]) {      
      if (m < 2 ) {
        var qclass = "q" + i;    
      }
      else {
        var qclass = "r" + i;
      };      
      
      console.log(qclass)
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
    .defer(d3.json, "data/districts_topo6.json")    
    .await(ready);

function ready(error, districts_topo6) {
// console.log(districts_topo6)
  svg.append("g")
      .attr("class", "districts_id")
    .selectAll("path")
      .data(topojson.feature(districts_topo6, districts_topo6.objects.districts_id).features)
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
      .datum(topojson.mesh(districts_topo6, districts_topo6.objects.districts_id, function(a, b) { 
        return a !== b; }))
      .attr("class", "states")
      .attr("d", path)

    svg.append("path")
      .datum(topojson.mesh(districts_topo6, districts_topo6.objects.districts_id, function(a, b) { 
        return a == b; }))
      .attr("class", "country")
      .attr("d", path)      
}

function tooltip(d) {
  var dead = d.properties.dead;
  var injured = d.properties.injured;
  var district = d.properties.district;

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
    .defer(d3.json, "data/districts_topo6.json")
    .await(ready);
}


// WHAT YOU DO WHEN YOU CLICK TO CHANGE THE MAP
var deathmap = document.getElementById("deathmap");
var injurymap = document.getElementById("injurymap");
var treatmentmap = document.getElementById("treatmentmap");
var supplymap = document.getElementById("supplymap");

deathmap.onmousedown = function () {
  if (m != 0) {
      deathmap.className = "large-3 medium-3 small-3 nepbuttons active";
      injurymap.className = "large-3 medium-3 small-3 nepbuttons";
      treatmentmap.className = "large-3 medium-3 small-3 nepbuttons";
      supplymap.className = "large-3 medium-3 small-3 nepbuttons";
      m = 0;

    rebuild();    
  };    
};

injurymap.onmousedown = function () {
  console.log('test')
  if (m != 1) {
    deathmap.className = "large-3 medium-3 small-3  nepbuttons";
    injurymap.className = "large-3 medium-3 small-3 nepbuttons active";
    treatmentmap.className = "large-3 medium-3 small-3 nepbuttons";
    supplymap.className = "large-3 medium-3 small-3 nepbuttons";
    m = 1;

    rebuild();
  };
};

treatmentmap.onmousedown = function () {
  if (m != 2) {
    deathmap.className = "large-3 medium-3 small-3  nepbuttons";
    injurymap.className = "large-3 medium-3 small-3 nepbuttons";
    treatmentmap.className = "large-3 medium-3 small-3 nepbuttons active";
    supplymap.className = "large-3 medium-3 small-3 nepbuttons";
    m = 2;

    rebuild();
  };
};

supplymap.onmousedown = function () {
  console.log('test')
  if (m != 3) {
    deathmap.className = "large-3 medium-3 small-3  nepbuttons";
    injurymap.className = "large-3 medium-3 small-3 nepbuttons";
    treatmentmap.className = "large-3 medium-3 small-3 nepbuttons";
    supplymap.className = "large-3 medium-3 small-3 nepbuttons active";
    m = 3;

    rebuild();
  };
};

d3.select(self.frameElement).style("height", height + "px");


