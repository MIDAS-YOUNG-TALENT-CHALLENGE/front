import api from './api'

export const viewTask = () => {
  const viewtask = process.env.REACT_APP_VIEW_TASK
  return api.get(viewtask ? viewtask : '')
}
