import React from 'react';
import { LayoutType, LayoutOptions } from '../layouts';
import { LocationDescriptor } from 'history';

export interface RouteConfig {
  path: string;
  exact: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: React.LazyExoticComponent<(_props: any) => JSX.Element> | ((_props: any) => JSX.Element);
  redirect?: boolean;
  to?: LocationDescriptor;
  animation?: string;
  layout?: LayoutType;
  disableInProduction?: boolean;
}

export default [
  {
    path: '/vote',
    exact: true,
    component: React.lazy(() => import('../pages/Vote')),
    layout: LayoutOptions.MAIN,
  },
  {
    path: '/vote/:idProposal',
    exact: true,
    component: React.lazy(() => import('../pages/Vote/DetailProposal')),
    layout: LayoutOptions.MAIN,
  },
  {
    path: '/',
    exact: true,
    redirect: true,
    to: '/vote',
  }
] as RouteConfig[];
