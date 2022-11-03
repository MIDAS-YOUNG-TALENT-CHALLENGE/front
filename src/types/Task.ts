interface Task {
  taskId: string
  teamId: string
  title: string
  location: string
  description: string
  completed: boolean
  createdAt: string
  important: true
  started: boolean
  created: boolean
  mention: {
    nickname: string
    userId: number
  }
}

export default Task
