import React, { FC } from 'react';
import { Button, Card, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router';
import Rotas from '../../common/enum/Rotas';

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
                Bem-vinda a Home!
              </Typography>
            </Grid>
            <Grid item>
              <Button color="secondary" variant="contained" onClick={() => history.push(Rotas.EXEMPLO_BANCO)}>
                Banco
              </Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="contained" onClick={() => history.push(Rotas.EXEMPLO_POSTS)}>
                Posts
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default Home;
