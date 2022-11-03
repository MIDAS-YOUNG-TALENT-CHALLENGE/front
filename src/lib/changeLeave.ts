import api from './api'

export const changeLeave = (state: "leave" | "attendance") => {
  const setLeave = process.env.REACT_APP_CHANGE_LEAVE
  api.post(setLeave ? setLeave : '', {state})
}
