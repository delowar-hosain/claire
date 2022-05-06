import { combineReducers } from 'redux';
import authReducer from './state/auth';

export const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;