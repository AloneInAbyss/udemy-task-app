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

  // // Search by ID
  // db.collection('users').findOne({ _id: new ObjectID("6098e05bde98de25306597a6") }, (error, user) => {
  //   // If an error occurs
  //   if (error) {
  //     return console.log('Unable to fetch')
  //   }

  //   console.log(user);
  // })

  // // Search by Name, Age
  // db.collection('users').find({ name:"Thiago" }).toArray((error, users) => {
  //   console.log(users);
  // })
  // // Count the number of records
  // db.collection('users').find({ name:"Thiago" }).count((error, count) => {
  //   console.log(count);
  // })

  db.collection('tasks').findOne({ _id: new ObjectID("60992a4b97cc190fd0f9f680") }, (error, task) => {
    // If an error occurs
    if (error) {
      return console.log('Unable to fetch')
    }

    console.log(task);

  })

  db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    // If an error occurs
    if (error) {
      return console.log('Unable to fetch')
    }

    console.log(tasks);
  })

})