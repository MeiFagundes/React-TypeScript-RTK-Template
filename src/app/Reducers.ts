import { combineReducers } from 'redux';
import bancoReducer from '../features/ExemploBanco/BancoSlice';
import postsReducer from '../features/ExemploPosts/PostsSlice';

const reducers = combineReducers({
  exemploBanco: bancoReducer,
  exemploPosts: postsReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
