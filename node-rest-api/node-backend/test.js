var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://goransh02:goransh02@sports-app-shard-00-00.nmzn2.mongodb.net:27017,sports-app-shard-00-01.nmzn2.mongodb.net:27017,sports-app-shard-00-02.nmzn2.mongodb.net:27017/?ssl=true&replicaSet=atlas-11z5af-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function (err, client) {
      console.log("Hello")
      client.close();
});

