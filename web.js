var express = require("express");
var app = express();
app.use(express.logger());
// serve the files in the directory
app.use(express.static(__dirname + '/files'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
