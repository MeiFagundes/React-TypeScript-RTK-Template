// eslint-disable-next-line
const envSettings = window as any;

export default class Env {
  static environment = envSettings.REACT_APP_ENVIRONMENT_NAME;
  static REACT_APP_API = envSettings.REACT_APP_API;
}
