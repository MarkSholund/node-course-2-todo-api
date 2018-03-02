// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // deleteMany
  //   db
  //     .collection("ToDos")
  //     .deleteMany({ text: "eat lunch" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //deleteOne
  //   db
  //     .collection("ToDos")
  //     .deleteOne({ text: "eat lunch" })
  //     .then(result => {
  //       console.log(result);
  //     });

  //findOneAndDelete
//   db
//     .collection("ToDos")
//     .findOneAndDelete({ completed: false })
//     .then(result => {
//       console.log(result);
//     });

//   db
//     .collection("Users")
//     .findOneAndDelete({ _id: new ObjectID("5a960df73cc5071dcc30f303") })
//     .then(result => {
//       console.log(result);
//     });

    db
    .collection("Users")
    .deleteMany({ name:'Mark Sholund' })
    .then(result => {
      console.log(result);
    });

  //  db.close();
});
