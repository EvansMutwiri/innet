import {configureStore} from '@reduxjs/toolkit';
import {addPost} from '../features/userData';

export const store = configureStore({
  reducer: {
    posts: addPost,
  },
});
