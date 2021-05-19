const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/task-manager', 
  { useNewUrlParser: true, useUnifiedTopology: true }
)

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