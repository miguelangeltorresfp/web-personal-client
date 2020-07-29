import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import './LayoutAdmin.scss';

export default function LayoutAdmin({ routes }) {
  const { Header, Content, Footer } = Layout;
  // console.log(props);

  return (
    <Layout>
      <h2>Menu Sider Admin</h2>
      <Layout>
        <Header>Header...</Header>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>Miguel Angel Torres</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
