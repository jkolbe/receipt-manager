var express = require('express'),
	receipt = require('./api_modules/receipts');

var multer = require('multer');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.use(multer({
	dest: './uploads/',
	rename: function (fieldname, filename) {
		return filename + Date.now();
	},
	onFileUploadStart: function (file) {
		console.log(file.originalname + ' is starting ...');
	},
	onFileUploadComplete: function (file) {
		console.log(file.fieldname + ' uploaded to  ' + file.path);
	}
}));


app.get('/api', receipt.findAll);
app.get('/api/:id', receipt.findById);
app.post('/api', receipt.addWine);
app.put('/api/:id', receipt.updateWine);
app.delete('/api/:id', receipt.deleteWine);

app.listen(3001);
console.log('Listening on port 3001...');