import { AuthActionType } from "@/interface/actionTypes"
import { AuthAction } from "./action"
import { FirebaseAuthState } from "@/interface/index"

const initialstate = {
    authUId: null,
    authToken: null,
}

const authReducer = (state: FirebaseAuthState = initialstate, action: AuthAction): FirebaseAuthState => {
    switch (action.type) {
        case AuthActionType.USER_UID_ADD:
            return { ...state, authUId: action.payload };
        case AuthActionType.USER_TOKEN_ADD:
            return { ...state, authToken: action.payload };
        default:
            return state;
    }
}
export default authReducer