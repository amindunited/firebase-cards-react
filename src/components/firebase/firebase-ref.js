import * as firebase from 'firebase';

class FirebaseRef {

  constructor () {

  }

  initializeApp (config) {
    this.firebaseApp = firebase.initializeApp(config);
  }
}
export default new FirebaseRef();