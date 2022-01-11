import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import ScrollToTop from './ScrollToTop';
import routes from '../models/Routes';

const Router: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {Object.values(routes).map((route) => (
          <PublicRoute key={route.name} exact path={route.routePath} component={route.component} />
        ))}
      </Switch>
    </>
  );
};

export default Router;
