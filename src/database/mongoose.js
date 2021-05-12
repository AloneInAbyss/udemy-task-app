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

me.save().then(() => {
  console.log(me);
}).catch((error) => {
  console.log('Error!', error);
})