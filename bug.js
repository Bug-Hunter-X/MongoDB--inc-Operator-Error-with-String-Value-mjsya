```javascript
// Incorrect use of $inc operator
db.collection('myCollection').updateOne( { "_id": ObjectId("652024c98955364154272266") }, { $inc: { "counter": "1" } } );
```