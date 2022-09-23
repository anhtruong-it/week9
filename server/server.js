const express = require("express");
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectId;

const PORT = 3000;
const server = require('./listen.js');
app.use(cors());
app.use(bodyParser.json());
const url = 'mongodb://localhost:27017';

const docArray = [{"id" : 2, "name" : "B", "description" : "number 2", "price" : 200, "units" : 5},
{"id" : 1, "name" : "A", "description" : "number 1", "price" : 100, "units" : 10}]

const callbackHell = async function(client, myCol) {
  result = await myCol.insertMany(docArray);
 // console.log("Inserted");
 // console.log(docArray);
};

MongoClient.connect(url, {maxPoolSize: 10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  if (err) { return console.log(err)}
  //db.dropDatabase();
    const dbName = 'produtcs';
    const db = client.db(dbName);
    const myCol = db.collection('products');
    myCol.remove({});
    ///const myCol = db.collection('products');
    callbackHell(client, myCol);


    require('./routes/api-add.js')(db, app);
    require('./routes/api-prodcount.js')(db, app);
    require('./routes/api-validid.js')(db, app);
    require('./routes/api-getlist.js')(db, app);
    require('./routes/api-getitem.js')(db, app, ObjectID);
    require('./routes/api-update.js')(db, app, ObjectID);
    require('./routes/api-deleteitem.js')(db, app, ObjectID);

    server.listen(http, PORT);


})



