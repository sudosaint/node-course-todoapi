const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

var id = "5b3513ad89655a27f8835022";
var id1 = "5b33becb11e3393f34999cf4";

// if(!ObjectID.isValid(id)){
//   console.log('ID NOT VALID');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:',todos);
// },(err) => {
//   console.log(err);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:',todo);
// },(err) => {
//   console.log(err);
// });
//
// Todo.findById(id).then(todo=>console.log('Todo by Id:',todo),
//   err=>console.log(err));

Users.findById(id1).then((user) =>{
  if(!user){
    return console.log("No user found");
  }
  console.log("Users:",user);
},(err) => {
  console.log(err);
});
