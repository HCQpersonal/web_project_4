export default class Api {
    constructor({ server, headers }) {
        this.server = server;
        this.headers = headers;
    }

    getCardList() {
        return fetch(this.server + '/cards/', {
            method: 'GET',
            headers: this.headers,
        }) .then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log);
    }

    getUserInfo() {
        return fetch(`${this.server}/users/me/`, {
            method: "GET",
            headers: this.headers,
        }) .then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log);
    }

    getAppInfo() {
        return Promise.all([this.getCardList(), this.getUserInfo()]);
    }

    addCard({ name, link }) {
        return fetch(`${this.server}/cards/`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link,
            }),
        }) .then(res => res.ok ? res.json() : Promise.reject('Error: ' + res.status))
        .catch(console.log('Problem fetching API results'));
    }

    toggleLike(id, like) {
        const method = isLiked ? 'DELETE' : 'PUT';
        return fetch(this.server + `/cards/likes/${cardID}`, {
            method: method,
            headers: this.headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
    }

    deleteCard(cardId) {
        return fetch(this.server + `/cards/${cardID}`, {
            method: 'DELETE',
            headers: this.headers,
        });
    }

    updateUserInfo({ name, job }) {
        return fetch(`${this.server}/users/me/`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: job,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        }).catch(console.log);
    }

    setUserAvatar({ avatar }) {
        return fetch(this.server + '/users/me/avatar/', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: link,
            }),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
        });
    }
}