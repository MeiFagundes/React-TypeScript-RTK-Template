import { EnvironmentConfiguration, environments } from './index';

const getProdEnvironmentConfiguration = (): EnvironmentConfiguration => {
  return {
    ENVIRONMENT_NAME: environments.prod,
    PUBLIC_URL: 'https://smarttool.template.com/',
    API_URL: 'https://smarttool.template.com/api/v1/',
  };
};

export default getProdEnvironmentConfiguration;
