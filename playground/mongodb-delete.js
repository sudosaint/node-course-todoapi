//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text:"Eat lunch"}).then((res) => {
  //   console.log(res);
  // },(err) => {
  //   console.log("Error");
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((res) => {
  //   console.log(res);
  // },(err) => {
  //   console.log("Error deleting the record:",err);
  // });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // },(error) => {
  //   console.log(error);
  // });
  // db.collection('Users').deleteMany({name:'asura'}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log(err);
  // });
  db.collection('Users').findOneAndDelete({
    _id:new ObjectID('5b30b6947032d737280c11db')
  }).then(res=>console.log(res),err=>console.log(err));
  //db.close();
});
