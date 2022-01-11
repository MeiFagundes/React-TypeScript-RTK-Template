import React, { ReactElement } from 'react';

export interface Route {
  routePath: string;
  component: React.FC;
  name: string;
  icon?: string | ReactElement;
  parametrosBreadcrumbs?: Array<string>;
  public?: boolean;
}

export interface Routes {
  [key: string]: Route;
}
