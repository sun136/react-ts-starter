import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUserInfo } from '@/services/user';

const initialState: { userInfo?: API.User; status: 'idle' | 'loading' | 'failed' } = {
  status: 'idle',
};

export const getUserAsync = createAsyncThunk('user/getUser', async () => {
  const response = await getUserInfo();
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userInfo = action.payload.data;
      })
      .addCase(getUserAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default userSlice.reducer;
