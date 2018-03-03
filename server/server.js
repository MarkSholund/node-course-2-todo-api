var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

// mongoose waits for the connection before processing further statements

var Todo = mongoose.model("Todo", {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: "Cook dinner"
});

// newTodo.save().then(
//   doc => {
//     console.log("Saved todo", doc);
//   },
//   e => {
//     console.log("Unable to save todo", e);
//   }
// );

var otherTodo = new Todo({
  text: "eat dinner",
  completed: true,
  completedAt: 5
});

otherTodo.save().then(
  doc => {
    console.log("Saved todo", JSON.stringify(doc, undefined, 2));
  },
  e => {
    console.log("Unable to save todo", e);
  }
);
