import React, { Component } from 'react';
import { Redirect }from 'react-router-dom';
import AppStore from '../app-store';
import FirebaseRef from '../components/firebase/firebase-ref';

class IndexPage extends Component {
  constructor (props) {
    super(props);
    this.store = AppStore;
  }
  render () {
   if (!this.store.firebaseConfig) {
      return (
        <Redirect to="/firebase-config"/>
      )
    }
    console.log('firebase app', FirebaseRef.firebaseApp);
    return (
      <div className="page">
        <main>
          <h2>Index Page</h2>
        </main>
      </div>
    );
  }
}

export default IndexPage;