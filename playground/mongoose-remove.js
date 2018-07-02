const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

// Todo.remove({}).then((res) => {
//   console.log(res);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5b3a10a57a5e6db531064912').then((todo) => {
  console.log(todo);
}).catch((err) => {
  console.log(err);
});
