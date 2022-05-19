var MongoClient = require ('mongodb').MongoClient;

var connectionString = "mongodb://127.0.0.1:27017/ZensarTechnologies"

MongoClient.connect(connectionString, { useUnifiedTopology: true }, function(err,db) {

    if(err) console.error(err);
    console.log("DB Connected");
    var dbobj= db.db("ZensarTechnologies");
    dbobj.collection("Employees").findOne({}, function(err,res) {

        if(err) console.error(err);
        console.log(res.firstname);
        console.log(res.lastname);

        db.close();

    });
})







   

 