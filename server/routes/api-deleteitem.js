module.exports = function(db, app, ObjectID) {

  app.post('/api/deleteitem', function(req, res) {
    console.log("ok");
    //alert("ok");
    if (!req.body) { return res.sendStatus(400);}
    productID = req.body.productid;
    console.log("productID", productID);


    var objectid = new ObjectID(productID);
    const collection = db.collection('products');

    collection.deleteOne({_id: objectid}, (err, docs)=> {

      collection.find({}).toArray((err, data)=> {
        console.log("data after: ", data);
        res.send(data);
      });
    });
  });
}
