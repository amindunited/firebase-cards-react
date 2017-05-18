
class AppStore {
  constructor () {

    this.deck = {};
    this.user = {
      uid: '',
      displayName: 'guest',
      email: '',
      imageUrl: '',
      decks: []
    };
    this.firebaseConfig = null;// = {};
  }
}

export default new AppStore();