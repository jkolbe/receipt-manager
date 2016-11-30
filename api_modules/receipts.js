var mongo = require('mongodb');

var Server = mongo.Server,
	Db = mongo.Db;

var BSON = require('bson').BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('receipt-manager', server);




db.open(function(err, db){
	if(!err) {
		console.log("Connected to 'receipt-manager' databse");
		db.collection('receipt', {strict:true}, function(err, collection) {
			if (err) {
                console.log("The 'receipt' collection doesn't exist. Creating it with sample data...");
                // populate with data
                populateDB();
            }
		});
	}
});

exports.findAll = function(req, res) {
	db.collection('receipt', function(err, collection){
		collection.find().toArray(
			function(err, items) {
				res.send(items);
			}
		);
	});
};

exports.findById = function(req, res) {
	var id = req.params.id;
    console.log('Retrieving receipt: ' + id);
    db.collection('receipt', function(err, collection) {
        collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item) { 
            res.send(item); 
        });
    });
}

exports.addWine = function(req, res) {
	var wine = req.body;
    console.log(wine);
    console.log('Adding receipt: ' + JSON.stringify(wine));

    db.collection('receipt', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result){
            if(err) {
                res.send({error: 'An error occured - ' + err});
            } else {
                res.send(result[0]);
            }
        });
    });
}


exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    console.log('Updating receipt: ' + id + ' updates: ' + JSON.stringify(wine));
    db.collection('receipt', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe: true}, function(err, result){
            if(err) {
                res.send({error: 'An error occured - ' + err });
            } else {
                res.send(wine);
            }
        });
    });
}


exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting receipt: ' + id);
    db.collection('receipt', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe: true}, function(err, result){
            if(err) {
                res.send({error: 'An error occured - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}


// populate DB with sample data
var populateDB = function() {

	var receipts = [
        {
            merchant: "BCBGMAXAZRIA",
            date: "2016-11-25",
            total: "458.33",
            image: "/uploads/justin.jpeg"
        },
        {
            merchant: "ZARA",
            date: "2016-11-26",
            total: "29.27",
            image: "/uploads/justin.jpeg"
        }
    ];

    db.collection('receipt', function(err, collection){
    	collection.insert(receipts, {safe:true}, function(err, result) {});
    });
};
