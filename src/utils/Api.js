export default class Api {
  constructor(apiParams) {
    this._baseUrl = apiParams.baseUrl;
    this._headers = apiParams.headers;
  }

  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(endpoint, options) {
    return fetch(`${this._baseUrl}${endpoint}`, options).then(res => this._checkRequest(res));
  }

  getInitialCards() {
    return this._request(`/cards`, {
      headers: this._headers
    });
  }

  addNewCard(item) {
    return this._request(`/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    });
  }

  deleteCard(cardId) {
    return this._request(`/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }

  getUserInfo() {
    return this._request(`/users/me`, {
      headers: this._headers
    });
  }

  editUserProfile({ name, about }) {
    return this._request(`/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    });
  }

  editUserAvatar({ avatar }) {
    return this._request(`/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    });
  }

  likeCard(cardId, like) {
    return this._request(`/cards/${cardId}/likes`, {
      method: like ? 'DELETE' : 'PUT',
      headers: this._headers
    });
  }
}

const apiParams = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'a2c97fd6-33e2-4a7f-88de-1986c85df645',
    'Content-Type': 'application/json'
  }
};

export const api = new Api(apiParams);
