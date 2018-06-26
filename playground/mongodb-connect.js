//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //     text: "Something to do",
  //     completed: false
  // }, (err, res) => {
  //   if(err){
  //     return console.log("Unable to Inset Todo", err);
  //   }
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Mahadev',
  //   age: 22,
  //   location: 'Andhra'
  // }, (err,res) => {
  //   if (err) {
  //     return console.log('Error inserting User:',err);
  //   }
  //   console.log(JSON.stringify(res.ops,undefined,2));
  // });

  db.close();
});
