var tipWidth = 150,
    tipHeight = 70;

// Ramp paraemters, first for dead, then for injuries
var rampameters = [
  [0,10,100,250,750,1500,3200], //deaths
  [0,0.001,0.01,0.05,0.1,0.3,5], //percentage killed
  [0,50,100,500,1000,2000,10000], //injuries
  [0,0.001,0.05,0.1,0.3,0.5,5], //percentage injured
  [0,100,500,1000,7500,20000,100000], //Complete houses
  [0,100,500,1000,7500,20000,100000] //partial houses
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
    .defer(d3.json, "data/districts_topo.json")    
    .await(ready);

function ready(error, districts_topo) {
  svg.append("g")
      .attr("class", "districts_id")
    .selectAll("path")
      .data(topojson.feature(districts_topo, districts_topo.objects.districts_id).features)
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
      .datum(topojson.mesh(districts_topo, districts_topo.objects.districts_id, function(a, b) { 
        return a !== b; }))
      .attr("class", "states")
      .attr("d", path)

    svg.append("path")
      .datum(topojson.mesh(districts_topo, districts_topo.objects.districts_id, function(a, b) { 
        return a == b; }))
      .attr("class", "country")
      .attr("d", path)      
}

function tooltip(d) {
  var dead = d.properties.dead;
  var injured = d.properties.injured;
  var district = d.properties.district;
  var deadpercent = d.properties.deadpercent;
  var injuredpercent = d.properties.injuredpercent;
  var completehouse = d.properties.OthComplete;
  var partialhouse = d.properties.OthPartial;

  if (m === 0 || m === 2) {
    var tip1 = "Total dead: " + dead;
    var tip2 = "Total injured: " + injured;
    var tipWidth = 150;
  } else if (m === 1) {
    var tip1 = "Total dead: " + dead;
    var tip2 = "Percent of population killed: " + deadpercent + "%";
    var tipWidth = 250;
  } else if (m === 3) {
    var tip1 = "Total injured: " + injured;
    var tip2 = "Percent of population injured: " + injuredpercent + "%";
    var tipWidth = 250;
  } else { 
    var tip1 = "Homes completely destroyed: " + completehouse;
    var tip2 = "Homes partially destroyed: " + partialhouse;
    var tipWidth = 250;
  };

  centroid = path.centroid(d);

  // Set the top or bottom tooltip
  if (width > 900) {
    if (centroid[1] < 250) {
      centroid_adjusted = [(centroid[0]-(tipWidth / 2)),(centroid[1]+25)];
    } else {
      centroid_adjusted = [(centroid[0]-(tipWidth / 2)),(centroid[1]-(tipHeight + 20))];
    };        
  }
  else if (width > 480) {
    if (centroid[0] < (width+100) / 2) {
      centroid_adjusted = [(centroid[0]-(tipWidth / 2)),(centroid[1]+25)];
    } else {
      centroid_adjusted = [(centroid[0]-(tipWidth / 2)),(centroid[1]-(tipHeight + 50))];
    };
  } 

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
        return tip1;
    })
    .attr("transform", function() { 
      return "translate(" + tip_text2 + ")"; });
    
    svg
    .append("text")
    .attr("class","tip-text3")
    .text(function(d){
        return tip2;
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
    .defer(d3.json, "data/districts_topo.json")
    .await(ready);
}

// Button Layer Switching
$('.nepbuttons').click(function() {
  $('.active').removeClass('active')
  $(this).addClass('active');
  m = parseInt($(this).attr('mindex')) 
  rebuild();
});

d3.select(self.frameElement).style("height", height + "px");

$(document).ready(function(){
  $.ajax({
    url: "data/update-info.json",
    success: function(data){
        $("#totalinfo").each(function(){
          $(this).find(".date").text(data["update-date"]);
          $($(this).find("h1")[0]).text("Total Deaths: " + data["lost"]);
          $($(this).find("h1")[1]).text("Total Injuries: " + data["injured"]);
        });
        $($(".contextinfo").find("p")[0]).text("Data Updated: " + data["update-date"]);
    },
    dataType: "json"
  });
});
