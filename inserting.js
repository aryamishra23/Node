var MongoClient = require ('mongodb').MongoClient;
var db;
var connectionString = "mongodb://127.0.0.1:27017/ZensarTechnologies"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {
    if(err) console.error(err);
    console.log("DB Connected");
    var dbobj= db.db("ZensarTechnologies");
var data1 = [{ "firstname": "Divya"},
{ "firstname": "Manisha"},
{ "firstname": "Medha"}
];

dbobj.collection("Employees").insertMany(data1, function(err,res) {
   if(err) console.error(err);
   console.log("Successful");
   db.close();



});

});