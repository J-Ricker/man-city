import React from 'react';
import Layout from './HOC/layout';
import {Switch, Route} from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';
import PublicRoutes from './components/authRoutes/publicRoutes';

import Home from './components/home';
import SignIn from './components/signIn';

import Dashboard from './components/admin/dashboard';


const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home}/>
      </Switch>
    </Layout>
  )
}
export default Routes;
