import React, { FC } from 'react';
import { Button, Card, Grid, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from '../../app/Reducers';
import { depositar, sacar, reiniciar } from './BancoSlice';

const Banco: FC = () => {
  const dispatch = useDispatch();
  const saldo = useSelector((state: State) => state.exemploBanco.saldo);

  const actions = bindActionCreators(
    {
      depositar,
      sacar,
      reiniciar,
    },
    dispatch,
  );

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
        <Grid item>
          <Typography variant="h4" align="center">
            Saldo:
          </Typography>
          <Card className="card-banco">
            <Box m={2}>
              <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12} alignItems="center">
                  <Typography variant="h1" align="center">
                    {saldo < 0 && '-'}R$ {Math.abs(saldo)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => actions.depositar(10)}>
                    Depositar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => actions.sacar(10)}>
                    Sacar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" disabled={saldo === 0} onClick={() => actions.reiniciar()}>
                    Reiniciar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Banco;
