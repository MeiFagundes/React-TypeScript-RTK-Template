import { combineReducers } from 'redux';
import bankReducer from '../features/BankExample/BankSlice';
import postsReducer from '../features/PostsExample/PostsSlice';

const reducers = combineReducers({
  bankExample: bankReducer,
  postsExample: postsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
