// CRUD - Cread, Read, Update, Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  // If an error occurs
  if (error) {
    return console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name: 'Thiago',
  //   age: 20
  // }, (error, result) => {
  //   // If an error occurs
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops)
  // })
  
  // db.collection('users').insertMany([
  //   {
  //     name: 'Jean',
  //     age: 28
  //   }, {
  //     name: 'Barbara',
  //     age: 20
  //   }
  // ], (error, result) => {
  //   // If an error occurs
  //   if (error) {
  //     return console.log('Unable to insert users')
  //   }

  //   console.log(result.ops);
  // })

  db.collection('tasks').insertMany([
    {
      description: 'study',
      completed: false
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert tasks')
    }

    console.log(result.ops)
  })

})