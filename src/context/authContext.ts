import {createContext} from 'react'
import {userContextState} from '@/interface/index'
export type AuthContextProps = {
    user: userContextState;
} 
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)
