import iconeHome from '../../common/assets/icons/iconeHome.svg';
import RotasEnum from '../../common/enum/Rotas';
import { Rotas } from './IRotas';
import Banco from '../../features/ExemploBanco';
import Posts from '../../features/ExemploPosts';
import Home from '../../features/Home';

const rotas: Rotas = {
  home: {
    pathRota: RotasEnum.HOME,
    component: Home,
    nome: 'Home',
    icone: iconeHome,
    public: true,
  },
  exemploBanco: {
    pathRota: RotasEnum.EXEMPLO_BANCO,
    component: Banco,
    nome: 'Exemplo Banco',
    icone: iconeHome,
    public: true,
  },
  exemploPosts: {
    pathRota: RotasEnum.EXEMPLO_POSTS,
    component: Posts,
    nome: 'Exemplo Posts',
    icone: iconeHome,
    public: true,
  },
};
export default rotas;
