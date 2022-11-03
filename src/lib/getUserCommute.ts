import api from "./api"

export const getUserCommute = (userID: number) => {
    const getCommute = process.env.REACT_APP_USER_COMMUTE
    console.log(getCommute)
    return api.get(getCommute ? getCommute + '/' + userID : '',{});
}