import axios from 'axios';
import SocketApi from './SocketApi';

const urls = {
  login: '/api/auth/login',
  register: '/api/auth/register',
  getViewer: '/api/account/user',
  productsLatest: '/api/products/latest',
  addProduct: '/api/products',
  uploadImages: '/api/upload/images',
  products: '/api/products',
  search: '/api/products/search',
  users: '/api/users',
  chats: '/api/chats',
  liked: '/api/products/saved',
};

export const Auth = {
  _token: null,

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

      SocketApi.init(this._token); //CHECK IF IMPORTANT 1.01.02 TIME IN VIDEO 13
    } catch (err) {
      console.error(err);
    }
  },
  login(body) {
    return axios.post(urls.login, body);
  },
  register(body) {
    return axios.post(urls.register, body);
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

export const Image = {
  uploadImages(formData) {
    return axios.post(urls.uploadImages, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export const Products = {
  getLatest() {
    return axios.get(urls.productsLatest);
  },
  getMoreLatest(offset) {
    return axios.get(`${urls.productsLatest}?offset=${offset}`);
  },
  getQuery(query) {
    return axios.get(`${urls.search}?${query}`);
  },
  get(id) {
    return axios.get(`${urls.products}/${id}`);
  },
  addProduct(body) {
    return axios.post(urls.addProduct, body);
  },

  like(id) {
    return axios.post(`${urls.products}/${id}/save`);
  },

  unLike(id) {
    return axios.post(`${urls.products}/${id}/unsave`);
  },

  getLiked() {
    return axios.get(urls.liked);
  },
};

export const Users = {
  get(id) {
    return axios.get(`${urls.users}/${id}`);
  },
  getProducts(id) {
    return axios.get(`${urls.users}/${id}/products`);
  },
};

export const Chats = {
  createChat(productId) {
    return axios.post(`${urls.products}/${productId}/createChat`);
  },
  fetch() {
    return axios.get(urls.chats);
  },
};

export const Messages = {
  sendMessage(chatId, text) {
    return axios.post(`${urls.chats}/${chatId}/messages`, { text });
  },
  fetchMessages(chatId) {
    return axios.get(`${urls.chats}/${chatId}/messages`);
  },
  fetchNextMessages(chatId, from) {
    return axios.get(`${urls.chats}/${chatId}/messages?from=${from}`);
  },
};

export function init() {
  Auth.init();
}
