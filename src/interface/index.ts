import { AuthActionType } from "./actionTypes";
export interface FirebaseAuthState {
    authUId: string | null;
    authToken: string | null;
};

export interface userIdAdded {
    type: AuthActionType.USER_UID_ADD,
    payload: string
}

export interface userTokenAdded {
    type: AuthActionType.USER_TOKEN_ADD,
    payload: string
}

export interface CartItem {
    id: number | string,
    variants: number,
    options: string,
    qty: number,
}
export interface AppState {
    cart: CartItem[],
    subTotal: number,
    wpCategories: any,
    wpPosts: any
}

