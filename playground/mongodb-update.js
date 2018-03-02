// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  //findOneAndUpdate
  //   db
  //     .collection("ToDos")
  //     .findOneAndUpdate(
  //       { _id: new ObjectID("5a99993a4809c95db19c6f8f") },
  //       { $set: { completed: true } },
  //       { returnOriginal: false }
  //     )
  //     .then(result => {
  //       console.log(result);
  //     });

  db
    .collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5a960d9d0213e42ecc1eac43") },
      {
        $set: { name: "Mark Sholund" },
        $inc: { age: 1 }
      },
      { returnOriginal: false }
    )
    .then(result => {
      console.log(result);
    });

  //  db.close();
});
