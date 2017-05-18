import React, { Component } from 'react';
import { Link, BrowserRouter, Route }from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import FirebaseRef from './components/firebase/firebase-ref';
import IndexPage from './pages/index-page';
import FirebaseConfigPage from './pages/firebase-config-page';
import AppStore from './app-store';

class App extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={IndexPage}/>
          <Route path="/about" component={() => <p>About page</p>} />
          <Route path="/fark" component={() => <p>Fark page</p>} />
          <Route path="/firebase-config" component={FirebaseConfigPage} />
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
