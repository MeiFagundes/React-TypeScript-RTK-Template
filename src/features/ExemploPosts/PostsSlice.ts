import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncThunkStatus from '../../common/enum/AsyncThunkStatus';
import { PostExemploModel } from '../../models/PostExemploModel';
import PostsExemploRepository from '../../repositories/PostExemploRepository';

export const obterPosts = createAsyncThunk('posts/getPosts', async () => {
  return (await PostsExemploRepository.getPostsExemplo()).data;
});

export interface PostState {
  posts: PostExemploModel[];
  status: AsyncThunkStatus;
  error?: string;
}

const initialState = { posts: [], status: AsyncThunkStatus.pending } as PostState;

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(obterPosts.pending, (state: PostState): PostState => {
      return { ...state, status: AsyncThunkStatus.pending };
    });
    builder.addCase(obterPosts.fulfilled, (state: PostState, action): PostState => {
      return {
        ...state,
        status: AsyncThunkStatus.fulfilled,
        posts: action.payload,
      };
    });
    builder.addCase(obterPosts.rejected, (state: PostState, action): PostState => {
      return { ...state, status: AsyncThunkStatus.rejected, error: action.error.message };
    });
  },
});

export default postsSlice.reducer;
