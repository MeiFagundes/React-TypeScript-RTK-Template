import React, { FC } from 'react';
import { Typography, Card, Box } from '@mui/material';

export interface ExchangeRateCardProps {
  currency: string;
  rate: string;
}

const ExchangeRateCard: FC<ExchangeRateCardProps> = ({ currency, rate }: ExchangeRateCardProps) => {
  return (
    <Card>
      <Box p={1}>
        <Typography variant="h3">{currency}</Typography>
        <Typography variant="h5">{rate}</Typography>
      </Box>
    </Card>
  );
};

export default ExchangeRateCard;
