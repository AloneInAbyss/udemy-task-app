const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(
  'mongodb://localhost:27017/task-manager', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const me = new User({
  name: 'Eula',
  email: "genshin@impact.gg"
})

me.save().then(() => {
  console.log(me);
}).catch((error) => {
  console.log('Error!', error);
})

// const Task = mongoose.model('Task', {
//   description: {
//     type: String
//   },
//   completed: {
//     type: Boolean
//   }
// })

// const task = new Task({
//   description: 'Learn the Mongoose library',
//   completed: false
// })

// task.save().then(() => {
//   console.log(task);
// }).catch((error) => {
//   console.log(error);
// })