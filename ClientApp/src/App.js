import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { SiteWords } from './components/SiteWords';
import { SiteWordGame } from './components/SiteWordGame';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/' component={SiteWords} />
            <Route exact path='/SiteWordGame' component={SiteWordGame} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
        </Layout>
    );
  }
}
