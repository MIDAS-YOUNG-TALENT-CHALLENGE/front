import { TaskerType } from '../components/taskChecker/MakeTask'
import api from './api'

export const makeTask = (data: TaskerType) => {
  const makeTasker = process.env.REACT_APP_CREATE_TASK
  return api.post(makeTasker ? makeTasker : '', { ...data })
}
