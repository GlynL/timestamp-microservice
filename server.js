// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function(req, res) {
  res.json({ greeting: "hello API" });
});

// current date - no argument
app.get("/api/timestamp", function(req, res) {
  const date = new Date();
  var unixDate = Math.floor(date / 1000);
  const utcDate = date.toUTCString();
  res.json({ unix: unixDate, utc: utcDate });
});

//
app.get("/api/timestamp/:date_string?", function(req, res) {
  const dateString = req.params.date_string;
  const date = new Date(Number(dateString));
  unixDate = Math.floor(date);
  utcDate = date.toUTCString();
  res.json({ unix: unixDate, utc: utcDate });
});

// listen for requests :)
var listener = app.listen(3000, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
