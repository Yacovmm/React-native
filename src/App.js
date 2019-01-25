import React, {Component} from 'react';
import Navigation from './Navigation';
import Provider from './screens/ManutScreen/provider'

export default class App extends Component {
  render() {
    return (      
      <Provider>
        <Navigation />
      </Provider>
    );
  }
}















