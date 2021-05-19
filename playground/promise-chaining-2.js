require('../src/database/mongoose')
const Task = require('../src/models/task')

deleteTaskAndCountCompleted = async (id) => {
  const task = await Task.findByIdAndDelete(id)
  console.log(task)
  const result = await Task.countDocuments({ completed: false })
  // console.log(result)
  return result
}

deleteTaskAndCountCompleted('60a5529b99888a0b149af897').then((result) => {
  console.log(result)
}).catch((e) => {
  console.log(e)
})