//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5b325c87bf0348344c2142bb')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{ returnOriginal : false}).then(res=>console.log(res),err=>console.log(err));
  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5b2f45f855fcab2198c1c13e')
  },{
      $set : {
        name:"sudosaint"
    },
      $inc : {
        age : 6
      }
  },
  {returnOriginal:false}).then((res) => {
    console.log(res);
  },(err) => {
    console.log(err);
  });
  //db.close();
});
