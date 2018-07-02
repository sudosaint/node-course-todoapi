var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {Users} = require('./models/users.js');
const {ObjectID} = require('mongodb');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.post('/todos',(req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  },(err) => {
    res.status(400).send(err);
  });
});

app.get('/todos',(req,res) => {
    Todo.find().then((todos)=>{
      res.send({todos});
    },(err) => {
      res.status(400).send(err);
    });
});

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(400).send("Id not valid");
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
        return res.status(404).send({});
    }
    res.send({todo});
  },(err) => {
    res.status(400).send(err);
  });
});

app.delete('/todos/:id', (req,res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(400).send("ID NOT VALID");
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send("NOT FOUND");
    }
    res.send({todo});
  }).catch((e) => res.status(400).send(e));
});

app.listen(port,() => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
