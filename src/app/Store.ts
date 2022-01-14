import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bancoReducer from '../features/BankExample/BankSlice';
import postsReducer from '../features/PostsExample/PostsSlice';
import { api as getExchangeRatesAPI } from '../repositories/queries/GetExchangeRates.generated';

const store = configureStore({
  reducer: {
    bankExample: bancoReducer,
    postsExample: postsReducer,
    [getExchangeRatesAPI.reducerPath]: getExchangeRatesAPI.reducer,
  },
  middleware: [thunk, getExchangeRatesAPI.middleware],
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
