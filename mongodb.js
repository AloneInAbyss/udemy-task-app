// CRUD - Cread, Read, Update, Delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  // If an error occurs
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').updateOne({
  //   _id: new ObjectID("6098dd1ea0f3ec2c2887be40")
  // }, {
  //   // Update Operator
  //   $set: {
  //     name: 'Diluc'
  //   }
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // })

  db.collection('tasks').updateMany({
    completed: false
  }, {
    // Update Operator
    $set: {
      completed: true
    }
  }).then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })

})