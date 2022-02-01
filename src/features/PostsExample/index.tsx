import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import { PostExampleModel } from '../../repositories/models/PostExampleModel';
import PostExampleCard from './components/PostExampleCard';
import { api } from '../../repositories/PostsExampleRepository';

const Posts: FC = () => {
  const Posts: FC = () => {
    const { data, isLoading, isError } = api.endpoints.getPosts.useQuery();

    localStorage.setItem('exchangeRates', JSON.stringify(data));
    if (isLoading)
      return (
        <Grid container direction="column" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
          <Grid item>
            <Typography variant="h4" align="center">
              Loading posts
            </Typography>
          </Grid>
        </Grid>
      );
    if (isError)
      return (
        <Grid container spacing={4} p={4}>
          <Grid item xs={5}>
            <Typography variant="h3">Error! :(</Typography>
          </Grid>
        </Grid>
      );

    return (
      <>
        <Grid container spacing={4} p={4}>
          {data?.map((post: PostExampleModel) => (
            <Grid item xs={4}>
              <PostExampleCard post={post} />
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  return (
    <>
      <Posts />
    </>
  );
};

export default Posts;
