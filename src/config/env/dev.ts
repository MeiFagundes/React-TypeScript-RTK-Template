import { EnvironmentConfiguration, environments } from './index';

const getDevEnvironmentConfiguration = (): EnvironmentConfiguration => {
  return {
    ENVIRONMENT_NAME: environments.dev,
    PUBLIC_URL: 'http://localhost:3000/',
    API_URL: 'http://localhost:5000/api/v1/',
  };
};

export default getDevEnvironmentConfiguration;
