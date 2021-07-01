import {GET_USERS} from "./action";

const initialState = {
    userList: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_USERS:
            return {
                ...state,
                userList: action.payload
            }
        default:
            return state
    }
}

