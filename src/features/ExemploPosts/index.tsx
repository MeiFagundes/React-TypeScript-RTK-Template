import React, { FC, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../app/Reducers';
import { obterPosts } from './PostsSlice';
import { PostExemploModel } from '../../models/PostExemploModel';
import AsyncThunkStatus from '../../common/enum/AsyncThunkStatus';
import PostExemploCard from './views/PostExemploCard';

const Posts: FC = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state: State) => state.exemploPosts);

  useEffect(() => {
    dispatch(obterPosts());
  }, [dispatch]);

  return (
    <>
      {postState.status === AsyncThunkStatus.pending && (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          style={{ minHeight: '100vh' }}
        >
          <Grid item>
            <Typography variant="h4" align="center">
              Carregando posts
            </Typography>
          </Grid>
        </Grid>
      )}
      <Grid container spacing={4} p={4}>
        {postState.status === AsyncThunkStatus.fulfilled &&
          postState.posts.map((post: PostExemploModel) => (
            <Grid item xs={4}>
              <PostExemploCard post={post} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Posts;
