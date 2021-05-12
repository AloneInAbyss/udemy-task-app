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

  // db.collection('users').deleteOne({
  //   _id: new ObjectID('60992ad58b8b2d31dc479339')
  // }).then((error) => {
  //   console.log(error);
  // }).catch((result) => {
  //   console.log(result);
  // })

  db.collection('tasks').deleteMany({
    description: 'play'
  }).then((error) => {
    console.log(error);
  }).catch((result) => {
    console.log(result);
  })

})