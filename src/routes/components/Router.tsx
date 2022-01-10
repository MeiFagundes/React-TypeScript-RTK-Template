import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ScrollToTop from './ScrollToTop';
import rotas from '../models/Rotas';

const Router: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {Object.values(rotas).map((rota) => (
          <PublicRoute key={rota.nome} exact path={rota.pathRota} component={rota.component} />
        ))}
      </Switch>
    </>
  );
};

export default Router;
