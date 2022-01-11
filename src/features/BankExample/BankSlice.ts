import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BankState {
  balance: number;
}

const initialState = { balance: 0 } as BankState;

const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    deposit(state: BankState, action: PayloadAction<number>) {
      return { ...state, balance: state.balance + action.payload };
    },
    withdraw(state: BankState, action: PayloadAction<number>) {
      return { ...state, balance: state.balance - action.payload };
    },
    reset(state: BankState) {
      return { ...state, balance: 0 };
    },
  },
});

export const { deposit, withdraw, reset } = bankSlice.actions;
export default bankSlice.reducer;
