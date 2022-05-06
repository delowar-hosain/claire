import { Dispatch } from "redux"
import { AuthActionType } from "@/interface/actionTypes"
import { AuthAction } from "./action"

export const authUidAdded = (amount: string) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: AuthActionType.USER_UID_ADD,
            payload: amount
        })
    }
}

export const authTokenAdded = (token: string) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: AuthActionType.USER_TOKEN_ADD,
            payload: token
        })
    }
}