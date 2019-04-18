import React from 'react';
import Layout from './HOC/layout';
import {Switch, Route} from 'react-router-dom';

import Home from './components/home';
import SignIn from './components/signIn';


const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={SignIn} path="/sign-in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  )
}
export default Routes;
