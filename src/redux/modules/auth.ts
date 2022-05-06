export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}
  type AuthState = {
    userId: string | null;
    token: string | null;
  };

  const initialState: AuthState = {
    userId: null,
    token: null 
  };
  
  export const userIdAdded = (userId: string) => {
    return typedAction('USER_ID_ADD', userId);
  };

  export const userTokenAdded = (token: string) => {
    return typedAction('USER_TOKEN_ADD', token);
  };
  
  type AuthAction = ReturnType<typeof userIdAdded | typeof userTokenAdded>;
  
  export function authReducer(
    state = initialState,
    action: AuthAction
  ): AuthState {
    switch (action.type) {
      case 'USER_ID_ADD':
        return { ...state, userId: action.payload };
      case 'USER_TOKEN_ADD':
        return { ...state, token: action.payload };
      default:
        return state;
    }
  }
