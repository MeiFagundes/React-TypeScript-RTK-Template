import React, { FC, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store';
import { getPosts } from './PostsSlice';
import { PostExampleModel } from '../../repositories/models/PostExampleModel';
import AsyncThunkStatus from '../../common/enum/AsyncThunkStatus';
import PostExampleCard from './components/PostExampleCard';

const Posts: FC = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state: RootState) => state.postsExample);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {postState.status === AsyncThunkStatus.pending && (
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <Grid item>
            <Typography variant="h4" align="center">
              Loading posts
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid container spacing={4} p={4}>
        {postState.status === AsyncThunkStatus.fulfilled &&
          postState.posts.map((post: PostExampleModel) => (
            <Grid item xs={4}>
              <PostExampleCard post={post} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Posts;
