module.exports = function(db, app, ObjectID) {

  app.post('/api/getitem', function(req, res) {

    console.log("ok");
    //alert("ok");
    if (!req.body) { return res.sendStatus(400);}
    productID = req.body.productid;
    console.log("productID", productID);

    var objectid = new ObjectID(productID);
    const collection = db.collection('products');

    collection.find({_id: objectid}).toArray((err, data)=> {
      console.log("product: ", data);
      res.send(data);
    });
  });
}

