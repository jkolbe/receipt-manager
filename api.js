var express = require('express'),
	receipt = require('./api_modules/receipts');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});

app.get('/api', receipt.findAll);
app.get('/api/:id', receipt.findById);
app.post('/api', receipt.addWine);
app.put('/api/:id', receipt.updateWine);
app.delete('/api/:id', receipt.deleteWine);

app.listen(3001);
console.log('Listening on port 3001...');