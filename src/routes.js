import React from 'react';
import Layout from './HOC/layout';
import {Switch, Route} from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';
import PublicRoutes from './components/authRoutes/publicRoutes';

import Home from './components/home';
import SignIn from './components/signIn';
import TheTeam from './components/theTeam';
import TheMatches from './components/theMatches';
import NotFound from './components/ui/notFound';

import Dashboard from './components/admin/dashboard';
import AdminMatches from './components/admin/matches';
import AddEditMatch from './components/admin/matches/editMatches';
import AdminPlayers from './components/admin/players';
import EditPlayers from './components/admin/players/editPlayers';


const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/admin_players/add_players" exact component={EditPlayers}/>
        <PrivateRoutes {...props} path="/admin_players/add_players/:id" exact component={EditPlayers}/>
        <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers}/>
        <PrivateRoutes {...props} path="/admin_matches/edit_match" exact component={AddEditMatch}/>
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>
        <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches}/>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
        <PublicRoutes {...props} restricted={true} path="/sign-in" exact component={SignIn}/>
        <PublicRoutes {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
        <PublicRoutes {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
        <PublicRoutes {...props} restricted={false} path="/" exact component={Home}/>
        <PublicRoutes {...props} restricted={false} exact component={NotFound}/>
      </Switch>
    </Layout>
  )
}
export default Routes;
