require('../src/database/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('609bbfd77ed18e2fe06eb152').then((task) => {
  console.log(task);
  return Task.countDocuments({ completed: false })
}).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
}) 