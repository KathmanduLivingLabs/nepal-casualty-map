var fs = require("fs");
var request = require("request");

request("https://docs.google.com/spreadsheets/d/1tGQlS3lIW077sOUIJ1qO0Rtaz34V-CxKEySFQ2W2CgA/export?format=csv&gid=1901101589", function(error, response, data){
    if (error || response.statusCode !== 200) return "error: "+ response.statusCode;

    var csvLinesArray = data.trim().replace(/\"/g,"").split("\n");
    var updateTimestamp = {
        "update-date": csvLinesArray[1].split(",")[2].split("-")[1]
    };
    var archiveFilename = "data-"+updateTimestamp["update-date"].replace(/:/g,".").replace(/ /g,"-")+"-NST.csv";
    fs.writeFile(archiveFilename, JSON.stringify(updateTimestamp), function(err){
        if(err) throw err;
        console.log("done! data archived in "+ archiveFilename);
    });
});

request
  .get("https://docs.google.com/spreadsheets/d/1tGQlS3lIW077sOUIJ1qO0Rtaz34V-CxKEySFQ2W2CgA/export?format=csv&gid=504630038")
  .on('error', function(err) {
    console.log(err)
  }).pipe(fs.createWriteStream("data.csv"));