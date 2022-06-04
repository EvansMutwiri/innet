import {createSlice} from '@reduxjs/toolkit';
const postslice = createSlice({
  name: 'posts',
  initialState: [
    {
      userId: 0,
      id: 0,
      title: '',
      body: '',
    },
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addPost} = postslice.actions;

export default postslice.reducer;
