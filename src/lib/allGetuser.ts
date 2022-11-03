import api from "./api"

export const allGetUser = () => {
    const url = process.env.REACT_APP_ALL_USER
    return api.get(url ? url : '',{})
}