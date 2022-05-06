import { createContext } from 'react'
import { FirebaseAuthState, CartItem, AppState } from '@/interface/index'
export type AuthContextProps = {
    auth: FirebaseAuthState;
}
export type AppContextProps = {
    state: AppState;
    updateSubTotal: (total: number) => void;
    addCategory: (list: any) => void;
    addPosts: (list: any) => void;
    addToCart: ( item: CartItem ) => void;
    removeFromCart: ( index: number ) => void;
}
const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
const AppContext = createContext<AppContextProps>({} as AppContextProps)

export { AuthContext, AppContext };

