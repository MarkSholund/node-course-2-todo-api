// const MongoClient = require("mongodb").MongoClient;
const {
  MongoClient,
  ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    console.log("Unable to connect to MongoDB server");
    return;
  }
  console.log("Connected to MongoDB server");

  //   db.collection("ToDos").insertOne(
  //     {
  //       text: "Something to do",
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         console.log("Unable to insert todo", err);
  //         return;
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  // insert new doc into Users (name, age, location)

  //   db.collection("Users").insertOne({
  //       name: 'Mark Sholund',
  //       age: 43,
  //       location: 'Reisterstown, MD'
  //   }, (err, result) => {
  //     if (err) {
  //       console.log("Unable to insert user", err);
  //       return;
  //     }
  //       console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});