import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { SiteWords } from './components/SiteWords';
import { SiteWordGame } from './components/SiteWordGame';

const week1 = ["a", "and", "girl", "is", "name", "the", "am", "big", "i", "my", "school", "zero"];
const week2 = ["than", "one", "red", "see", "apple", "bus", "like", "boy", "tree", "yellow", "we", "no"];
const week3 = ["come", "can", "mom", "two", "two", "teacher", "green", "to", "yes", "it", "on", "he", "little"];
const week4 = ["nice", "look", "she", "blue", "three", "want", "up", "an", "very", "so", "dad", "down"];
const all = week1.concat(week2).concat(week3).concat(week4);

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <Layout>
            <Route exact path='/' component={() => <SiteWords words={all} />} />
            <Route exact path='/SiteWordGame' component={() => <SiteWordGame words={all} />} />
        </Layout>
    );
  }
}
