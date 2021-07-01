export const GET_USERS = 'GET_USERS'

export function addUsers(users) {
    return {
        type: GET_USERS,
        payload: users
    }
}