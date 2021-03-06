// Dependencies
const fs = require("fs");
const http = require("http");
const https = require("https");

const express = require("express");

const app = express();
//const { Pool, Client } = require('pg')
const pg = require("pg");
const asyncHandler = require("express-async-handler");
const result = require("dotenv").config();

request = require("request");
const bodyParser = require("body-parser");
var wget = require("node-wget");
var url = require("url");
var path = require("path");

const privateKey = fs.readFileSync("privkey.pem", "utf8");
const certificate = fs.readFileSync("fullchain.pem", "utf8");
//const ca = fs.readFileSync('csr.pem', 'utf8');

const credentials = {
  key: privateKey,
  cert: certificate,
};

app.get("/api/ping", function (req, res) {
  res.json({ message: "pong" });
});

app.use("/", express.static(path.join(__dirname, "/html")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post(
  "/api/testapi",
  asyncHandler(async (req, res, next) => {
    var walletId = req.body.walletId;
   
    console.dir(walletId);
    res.json({ response: "ok", message: walletId });
  })
);


app.post(
    "/api/settestapi",
    asyncHandler(async (req, res, next) => {
      var walletId = req.body.walletId;
      var msg = "wallet was set " + walletId;
      console.dir(walletId);
      res.json({ response: "ok", message: msg });
    })
  );
  
  

// Starting both http & https servers
const httpsServer = https.createServer(credentials, app);

//const httpsServer = https.createServer(credentials, app);
//const httpServer = http.createServer(app);

httpsServer.listen(3000, () => {
  console.log("HTTPS Server running on port 3000");
});