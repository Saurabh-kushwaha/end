import { updateValue } from "../../utils/localStorage";
import { USER_LOGIN, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionType";
import { initialState } from "./auth.constants";

export const Authreducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case USER_LOGIN_SUCCESS: {
            updateValue("token",payload.token)
            return {
                ...state,
                isUserLogIn: true,
                isLoading: false,
                error: false,
               ...payload,
            }
        }
        case USER_LOGIN_ERROR: {
            updateValue("token",payload.token)
            return {
                ...state,
                isUserLogIn: false,
                isLoading: false,
                error: true,
            }
        }
         case USER_LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: false
            }
        }   
        case USER_LOGIN: {
            updateValue("token",payload.token)
            return {
                ...state,
                isUserLogIn: true,
               ...payload,
            }
        }
        case USER_LOGOUT: {
            updateValue("userToken","")
            return {
                ...state,
                isUserLogIn: false,
                userToken:"", 
            }
        }
        default: {
            return  state ;
        }    
    }
};