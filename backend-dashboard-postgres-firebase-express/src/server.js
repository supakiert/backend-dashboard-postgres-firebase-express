const express = require("express");
const app = express();
const cors = require("cors");

var bodyParser = require("body-parser");

var fs = require('fs');
var firebase = require("firebase");
var config = require('./configFirebase.js');

const firebase_data = firebase.initializeApp(config);
var database = firebase_data.database();
var getData_Pimai_D = database.ref("Pimai_D");
var getData_Sakon_K = database.ref("Sakon_K");

console.log(config);

getData_Pimai_D.on(
  "value",
  function (snapshot) {
    var json = JSON.stringify(snapshot.val());
    fs.writeFile("./raw_data/Pimai_D/FB-ADN-WF_20232303.json", json, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      console.log("field 'Pimai_D' has been saved.");
    });
    getData_Pimai_D.off("value");
  },
  function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  }
);

getData_Sakon_K.on(
  "value",
  function (snapshot) {
    var json = JSON.stringify(snapshot.val());
    fs.writeFile("./raw_data/Sakon_K/FB-ADN-WF_20232303.json", json, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      console.log("field 'Sakon_K' has been saved.");
    });
    getData_Sakon_K.off("value");
  },
  function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  }
);

//const port = process.env.PORT || 3000;
//app.listen(port, function () {
//  console.log("Server Running");
//});
