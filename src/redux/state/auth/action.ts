import {AuthActionType} from '@/interface/actionTypes'

interface userIdAdded {
    type: AuthActionType.USER_UID_ADD,
    payload: string
}

interface userTokenAdded {
    type: AuthActionType.USER_TOKEN_ADD,
    payload: string
}

export type AuthAction = userIdAdded | userTokenAdded
