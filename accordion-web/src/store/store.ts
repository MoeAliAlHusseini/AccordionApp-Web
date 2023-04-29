import {configureStore} from '@reduxjs/toolkit';

import listSlice from './reducers/listSlice';

export const store = configureStore({
  reducer: {
    list: listSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
