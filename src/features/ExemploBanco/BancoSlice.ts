import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BancoState {
  saldo: number;
}

const initialState = { saldo: 0 } as BancoState;

const bancoSlice = createSlice({
  name: 'banco',
  initialState,
  reducers: {
    depositar(state: BancoState, action: PayloadAction<number>) {
      return { ...state, saldo: state.saldo + action.payload };
    },
    sacar(state: BancoState, action: PayloadAction<number>) {
      return { ...state, saldo: state.saldo - action.payload };
    },
    reiniciar(state: BancoState) {
      return { ...state, saldo: 0 };
    },
  },
});

export const { depositar, sacar, reiniciar } = bancoSlice.actions;
export default bancoSlice.reducer;
