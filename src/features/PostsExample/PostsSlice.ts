import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncThunkStatus from '../../common/enum/AsyncThunkStatus';
import { PostExampleModel } from '../../models/PostExampleModel';
import PostsExampleRepository from '../../repositories/PostsExampleRepository';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  return (await PostsExampleRepository.getExamplePosts()).data;
});

export interface PostState {
  posts: PostExampleModel[];
  status: AsyncThunkStatus;
  error?: string;
}

const initialState = { posts: [], status: AsyncThunkStatus.pending } as PostState;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state: PostState): PostState => {
      return { ...state, status: AsyncThunkStatus.pending };
    });
    builder.addCase(getPosts.fulfilled, (state: PostState, action): PostState => {
      return {
        ...state,
        status: AsyncThunkStatus.fulfilled,
        posts: action.payload,
      };
    });
    builder.addCase(getPosts.rejected, (state: PostState, action): PostState => {
      return { ...state, status: AsyncThunkStatus.rejected, error: action.error.message };
    });
  },
});

export default postsSlice.reducer;
