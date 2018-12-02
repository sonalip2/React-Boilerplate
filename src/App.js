import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Layout from './components/layout';
import Authentication from './components/authentication';
import Login from './containers/auth/login';
import Dashboard from './containers/dashboard';
import CreateBlog from './containers/blog/create';
import UpdateBlog from './containers/blog/update';
import ListBlog from './containers/blog/list';
import ViewBlog from './components/blog/view';

const App = () => {
  return (
    <Switch>
      <Route exact path='/login' component={Login} />
      <Layout>
        <Authentication>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/posts' component={ListBlog} />
          <Route exact path='/posts/:id/update' component={UpdateBlog} />
          <Route exact path='/posts/:id' component={ViewBlog} />
          <Route exact path='/posts/new' component={CreateBlog} />
        </Authentication>
      </Layout>
    </Switch>
  );
}

export default App;
