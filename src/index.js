const express = require('express')
require('./database/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  // const task = await Task.findById('60b55eeaf8e1913dd8db0528')
  // // Find the user associated with this task
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('60b55eb1f8e1913dd8db0525')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()