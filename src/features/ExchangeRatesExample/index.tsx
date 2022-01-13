import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
import ExchangeRateCard from './components/ExchangeRateCard';
import { api } from '../../repositories/queries/GetExchangeRates.generated';

const ExchangeRates: FC = () => {
  const { data, isLoading, isError } = api.endpoints.GetExchangeRates.useQuery();

  if (isLoading)
    return (
      <Grid container spacing={4} p={4}>
        <Grid item xs={2}>
          <Typography variant="h3">Loading...</Typography>
        </Grid>
      </Grid>
    );
  if (isError) return <p>Error :(</p>;

  return (
    <>
      <Typography variant="h4" align="center">
        USD exchange rates:
      </Typography>
      <Grid container spacing={4} p={4}>
        {data?.rates?.map((rate) => (
          <Grid item xs={2}>
            <ExchangeRateCard rate={rate?.rate || ''} currency={rate?.currency || ''} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const ExchangeRatesExample: FC = () => {
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
          <ExchangeRates />
        </Grid>
      </Grid>
    </>
  );
};

export default ExchangeRatesExample;
