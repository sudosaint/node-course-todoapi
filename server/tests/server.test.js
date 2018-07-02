const expect = require('expect');
const request = require('supertest');

const {ObjectID} = require('mongodb');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  _id: new ObjectID(),
  text : "First todo"
},{
  _id: new ObjectID(),
  text: "Second todo"
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it("should create a new todo",(done) => {
    var text = 'Boom Boom';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err,res) => {
        if(err){
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create Todo with invalid body data',(done) =>{
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err,res) => {
        if(err){
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos route', () => {
  it("should fetch all todos", (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe('GET /todos/id route',() => {
  it("should return a document by ID", (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe("First todo")
      })
      .end(done);
  });
});

describe('DELETE /todos/:id', () => {
  it("should remove a todo",(done) => {
    var hexString = todos[0]._id.toHexString();
    request(app)
      .delete(`/todos/${hexString}`)
      .expect(200)
      .expect((res) => {
        res.body.todo._id = hexString;
      })
      .end((err,res) => {
        if (err){
          return done(err);
        }

        Todo.findById(hexString).then((todo) => {
          expect(todo).toNotExist();
          done();
        }).catch((e) => done(e));
      });
  });
});
