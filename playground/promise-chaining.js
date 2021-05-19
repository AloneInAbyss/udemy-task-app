require('../src/database/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('60a4cf65bb3a2b4a40c7d60f', { age: 1 }).then((user) => {
  console.log(user)
  return User.countDocuments({ age: 1 })
}).then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})