// eslint-disable-next-line
const envSettings = window as any;

export default class Env {
  static ambiente = envSettings.REACT_APP_NOME_AMBIENTE;
  static REACT_APP_API = envSettings.REACT_APP_API;
}
