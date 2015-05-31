var fs = require("fs");
var request = require("request");
var cheerio = require("cheerio");

var updateTimestamp = {};

function updateFile(filename){

fs.readFile(filename, {
                encoding: "utf-8"
            }, function(err, data){
    if(err){
        console.log("error in source file: " + filename);
        return;
    }
    
    $ = cheerio.load(data);
    
    $("#totalinfo").each(function(){
          $(this).find(".date").text(updateTimestamp["update-date"]);
          $($(this).find("h1")[0]).text("Total Deaths: " + updateTimestamp["lost"]);
          $($(this).find("h1")[1]).text("Total Injuries: " + updateTimestamp["injured"]);
    });
    $($(".contextinfo").find("p")[0]).text("Data Updated: " + updateTimestamp["update-date"]);

    
    fs.writeFile(filename, $.html(), function(err){
        if(err) throw err;
        console.log(filename + " updated");
    });
});
}

request("https://docs.google.com/spreadsheets/d/1tGQlS3lIW077sOUIJ1qO0Rtaz34V-CxKEySFQ2W2CgA/export?format=csv&gid=1901101589", function(error, response, data){
    if (error || response.statusCode !== 200) return "error: "+ response.statusCode;
    var csvLinesArray = data.trim().replace(/\"/g,"").split("\n");
    var line9 = csvLinesArray[9].split(",");
    updateTimestamp = {
        "update-date": csvLinesArray[1].split(",")[2].split("-")[1].replace("AM","NST").replace("PM","NST"),
        "lost": line9[4]+","+line9[5],
        "injured": line9[6]+","+line9[7]
    };


    updateFile("../index.html");
    updateFile("../iframe.html");

    var archiveFilename = "data-"+updateTimestamp["update-date"].replace(/:/g,".").replace(/ /g,"-")+".csv";
    
    fs.writeFile(archiveFilename, data, function(err){
        if(err) throw err;
        console.log("data archived in "+ archiveFilename);
    });
});

request
  .get("https://docs.google.com/spreadsheets/d/1tGQlS3lIW077sOUIJ1qO0Rtaz34V-CxKEySFQ2W2CgA/export?format=csv&gid=504630038")
  .on('error', function(err) {
    console.log(err)
  }).pipe(fs.createWriteStream("data.csv"));





