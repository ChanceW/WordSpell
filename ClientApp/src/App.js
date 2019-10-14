import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import SiteWords from './components/SiteWords';
import { SiteWordGame } from './components/SiteWordGame';
import WordList from "./SiteWords";
import MathHelper from './Utilities/MathHelper';

export default class App extends Component {
    displayName = App.name

    constructor(props) {
        super(props);
        this.state = { words: MathHelper.shuffleArray(WordList.getWords([])) };
    }

  render() {
    return (
        <Layout>
            <Route exact path='/' component={() => <SiteWords words={this.state.words} />} />
            <Route exact path='/SiteWordGame' component={() => <SiteWordGame words={this.state.words} />} />
        </Layout>
    );
  }
}
