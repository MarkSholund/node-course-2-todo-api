// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    console.log("Unable to connect to MongoDB server");
    return;
  }
  console.log("Connected to MongoDB server");

  // db
  //   .collection("ToDos")
  //   .find({ _id: new ObjectID("5a94c5a3e109ad00d85c754a") })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch ToDos", err);
  //     }
  //   );

  // db
  // .collection("ToDos")
  // .find()
  // .count()
  // .then(
  //   count => {
  //     console.log(`Todos count: ${count}`);
  //   },
  //   err => {
  //     console.log("Unable to fetch ToDos", err);
  //   }
  // );

  db
  .collection("Users")
  .find({name:'Jessica'})
  .toArray()
  .then(
    docs => {
         console.log("Users");
         console.log(JSON.stringify(docs, undefined, 2));
},
    err => {
      console.log("Unable to fetch Users", err);
    }
  );

  //  db.close();
});
