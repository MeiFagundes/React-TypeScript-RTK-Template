import React, { FC } from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import Routes from '../../common/enum/Routes';

const Home: FC = () => {
  const history = useHistory();

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={4}
        style={{ minHeight: '100vh' }}
      >
        <Card>
          <Grid container justifyContent="center" alignItems="center" p={4} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Welcome Home!
              </Typography>
            </Grid>
            <Grid item>
              <Button color="secondary" variant="contained" onClick={() => history.push(Routes.BANK_EXAMPLE)}>
                Bank
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained" onClick={() => history.push(Routes.POSTS_EXAMPLE)}>
                Posts
              </Button>
            </Grid>
            <Grid item>
              <Button color="secondary" variant="outlined" onClick={() => history.push(Routes.EXCHANGE_RATES_EXAMPLE)}>
                Exchange Rates
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default Home;
