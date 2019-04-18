import React from 'react';
import Layout from './HOC/layout';
import {Switch, Route} from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';

import Home from './components/home';
import SignIn from './components/signIn';

import Dashboard from './components/admin/dashboard';


const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
        <Route exact component={SignIn} path="/sign-in" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  )
}
export default Routes;
