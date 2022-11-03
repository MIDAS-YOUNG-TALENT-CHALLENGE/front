import api from './api'

export const changeName = (userId: number, nickname: string) => {
  const setName = process.env.REACT_APP_CHANGE_NAME
  console.log(userId)
  api.put(setName ? setName : '', { userId: userId, nickname: nickname })
}
