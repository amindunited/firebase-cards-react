import React, { Component } from 'react';
import AppStore from '../app-store';
import { Redirect }from 'react-router-dom';
import FirebaseRef from '../components/firebase/firebase-ref';

export default class FirebaseConfigPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      configString: '',
      configObj: null
    }
  }
  handleSubmit (e) {
    e.preventDefault();
    this.state.configString = this.state.configString.replace(/(^\s*)(\w.*): \"/gm, '"$2": "');
    this.state.firebaseConfig = JSON.parse(this.state.configString);
    AppStore.firebaseConfig = this.state.firebaseConfig;
    FirebaseRef.initializeApp(AppStore.firebaseConfig);
    this.props.history.push('/');
  }

  handleChange (event) {
    this.setState({configString: event.target.value});
  }
  render () {
   if (AppStore.firebaseConfig) {
      return (
        <Redirect to="/"/>
      )
    }
    return (
      <div>
        <h2>Firebase Config</h2>
        <label>Copy and paste your firebase config here</label>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
            <textarea rows="5" cols="65" value={this.state.configString} onChange={(e)=>{console.log('huh?', this); this.handleChange(e)}}></textarea>
            <div>
              <button type="submit">Submit</button>
            </div>
        </form>
      </div>
    )
  }
}