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
});
( async function() {
const client = new MongoClient('mongodb://127.0.0.1:27017', { useNewUrlParser: true, useUnifiedTopology: true } );
    try {
       await client.connect();
       const coll = client.db('ZensarTechnologies').collection('Employees');
       const indxs = await coll.indexes();
       console.log(indxs);    
    } catch (err) {
        console.log(err.stack);
    }
    client.close();

   })();