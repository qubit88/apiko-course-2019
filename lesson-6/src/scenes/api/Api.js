export const Auth = {
  _token: null,
  get isLoggedIn() {
    return !!this._token;
  },
  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
    } catch (err) {
      console.error(err);
    }
  },
  login() {
    // todo request to server
    this._token = 'token';

    this._storeToken();
  },

  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem('token');
    } catch (err) {
      console.error(err);
    }
  },

  _storeToken() {
    try {
      localStorage.setItem('token', JSON.stringify(this._token));
    } catch (err) {
      console.error(err);
    }
  },
};

export function init() {
  Auth.init();
}
