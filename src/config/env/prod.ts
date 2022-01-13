import { EnvironmentConfiguration, environments } from './index';

const getProdEnvironmentConfiguration = (): EnvironmentConfiguration => {
  return {
    ENVIRONMENT_NAME: environments.prod,
    PUBLIC_URL: 'https://smarttool.template.com/',
    REST_API_URL: 'https://smarttool.template.com/api/v1/',
    GRAPHQL_API_URL: 'https://48p1r2roz4.sse.codesandbox.io',
  };
};

export default getProdEnvironmentConfiguration;
