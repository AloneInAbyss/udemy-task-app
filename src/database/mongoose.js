const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/task-manager', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const me = new User({
  name: 'Eula',
  age: 25
})

// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log('Error!', error);
// })

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const task = new Task({
  description: 'Learn the Mongoose library',
  completed: false
})

task.save().then(() => {
  console.log(task);
}).catch((error) => {
  console.log(error);
})