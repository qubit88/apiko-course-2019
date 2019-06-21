import axios from 'axios';

const urls = {
  login: '/api/auth/login',
  register: 'api/auth/register',
  getViewer: '/api/account/user',
};

export const Auth = {
  _token: null,
  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;

    this._storeToken(token);

    this._setTokenToAxios(token);
  },
  init() {
    try {
      const token = window.localStorage.getItem('token');
      this._token = JSON.parse(token);
      console.log(this._token);

      this._setTokenToAxios(this._token);
    } catch (err) {
      console.error(err);
    }
  },
  login(body) {
    return axios.post(urls.login, body);
  },

  logout() {
    this._token = null;
    this._unsetTokenToAxios();
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

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  _unsetTokenToAxios() {
    delete axios.defaults.headers.common.Authorization;
  },
};

export const Viewer = {
  get() {
    return axios.get(urls.getViewer);
  },
};

export function init() {
  Auth.init();
}
