const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(
  'mongodb://localhost:27017/task-manager', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contain "password"')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number')
      }
    }
  }
})

const me = new User({
  name: 'Eula',
  email: 'genshin@impact.gg',
  password: 'pass098!'
})

// me.save().then(() => {
//   console.log(me);
// }).catch((error) => {
//   console.log('Error!', error);
// })

const Task = mongoose.model('Task', {
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const task = new Task({
  description: '  Eat lunch ',
})

task.save().then(() => {
  console.log(task);
}).catch((error) => {
  console.log(error);
})