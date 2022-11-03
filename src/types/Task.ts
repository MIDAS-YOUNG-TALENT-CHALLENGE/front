interface Task {
  taskId: string
  teamId: string
  title: string
  location: string
  description: string

  createdAt: string
  important: true
  started: boolean
  created: boolean
  mention: {
    nickname: string
  }
}

export default Task
