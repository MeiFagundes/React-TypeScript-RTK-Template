import React, { FC } from 'react';
import { Button, Card, Grid, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RootState } from '../../app/Store';
import { deposit, withdraw, reset } from './BankSlice';

const Bank: FC = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state: RootState) => state.bankExample.balance);

  const actions = bindActionCreators(
    {
      deposit,
      withdraw,
      reset,
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
            Balance:
          </Typography>
          <Card className="card-bank">
            <Box m={2}>
              <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item xs={12} alignItems="center">
                  <Typography variant="h1" align="center">
                    {balance < 0 && '-'}$ {Math.abs(balance)}
                  </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => actions.deposit(10)}>
                    Deposit
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" onClick={() => actions.withdraw(10)}>
                    Withdraw
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" disabled={balance === 0} onClick={() => actions.reset()}>
                    Reset
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

export default Bank;
