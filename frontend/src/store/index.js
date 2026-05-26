import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import walletReducer from '../features/wallet/walletSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    wallet: walletReducer,
  },
});
