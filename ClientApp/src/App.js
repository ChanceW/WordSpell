import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { SiteWords } from './components/SiteWords';
import { SiteWordGame } from './components/SiteWordGame';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/' component={SiteWords} />
            <Route exact path='/SiteWordGame' component={SiteWordGame} />
        </Layout>
    );
  }
}
