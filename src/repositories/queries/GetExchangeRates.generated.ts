import * as Types from '../../generated/graphql';

import { api } from '../../common/utils/RTKQueryInstance';
export type GetExchangeRatesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetExchangeRatesQuery = { __typename?: 'Query', rates?: Array<{ __typename?: 'ExchangeRate', currency?: string | null | undefined, rate?: string | null | undefined } | null | undefined> | null | undefined };


export const GetExchangeRatesDocument = `
    query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetExchangeRates: build.query<GetExchangeRatesQuery, GetExchangeRatesQueryVariables | void>({
      query: (variables) => ({ document: GetExchangeRatesDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };


