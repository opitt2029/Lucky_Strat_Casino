import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
  currencyName: 'Star Coin',
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const { setBalance } = walletSlice.actions;
export default walletSlice.reducer;
