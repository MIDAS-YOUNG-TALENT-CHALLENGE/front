interface Task {
  taskId: string
  teamId: string
  title: string
  location: string
  description: string
  mentionId: number
  createdAt: string
  important: true
  started: false
  completed: false
}

export default Task
