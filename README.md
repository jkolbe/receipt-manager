Start MongoDB
	> cd /usr/local/mongodb
	> ./bin/mongod


3. Install MongoDB Driver for Node
⋅⋅* Inside receipt-manager folder
	> npm install mongodb

Run server (new terminal window)
	> node api.js


Get all wines:
> curl -i -X GET http://localhost:3001/api

Get wine with _id value of 5069b47aa892630aae000007 (use existing id):
> curl -i -X GET http://localhost:3000/api-receipt/5069b47aa892630aae000007

Delete wine with _id value of 5835e65536cf2b47c7739085:
> curl -i -X DELETE http://localhost:3000/api-receipt/5835e65536cf2b47c7739085

Add a new wine:
> curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "New Wine", "year": "2009"}' http://localhost:3000/api-receipt

Modify wine with _id value of 5069b47aa892630aae000007:
> curl -i -X PUT -H 'Content-Type: application/json' -d '{"name": "Newer Wine", "year": "2010"}' http://localhost:3000/api-receipt/5835e67a5c149e48ef973cd1