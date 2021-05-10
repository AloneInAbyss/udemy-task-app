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

  db.collection('users').findOne({ _id: new ObjectID("6098e05bde98de25306597a6") }, (error, user) => {
    // If an error occurs
    if (error) {
      return console.log('Unable to fetch')
    }

    console.log(user);
  })

})