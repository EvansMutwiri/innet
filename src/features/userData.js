import {createSlice} from '@reduxjs/toolkit';
const postslice = createSlice({
  name: 'posts',
  initialState: [
    {
      userId: 1,
      id: 21,
      title: 'string',
      body: 'string',
    },
  ],
  reducers: {},
});

export default postslice.reducer;
