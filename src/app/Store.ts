import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bancoReducer from '../features/BankExample/BankSlice';
import { api as getPostsAPI } from '../repositories/PostsExampleRepository';
import { api as getExchangeRatesAPI } from '../repositories/queries/GetExchangeRates.generated';

const store = configureStore({
  reducer: {
    bankExample: bancoReducer,
    [getExchangeRatesAPI.reducerPath]: getExchangeRatesAPI.reducer,
    [getPostsAPI.reducerPath]: getPostsAPI.reducer,
  },
  middleware: [thunk, getExchangeRatesAPI.middleware, getPostsAPI.middleware],
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
