class API {
    constructor() {
        this.API_URL = 'http://localhost:3000/v1';
        this.options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }
    }
    getItems() {
        return fetch(`${this.API_URL}/getItems`, this.options)
            .then(res => {
                // console.log('res', res);
                return res.json();
            });
    }
    getItem(id) {
        console.log(id);
        return fetch(`${this.API_URL}/editItem/${id}`, this.options)
            .then(res => {
                // console.log('res', res);
                return res.json();
            });
    }
    updateItem(updatedItem) {
        console.log(updatedItem);
        return fetch(`${this.API_URL}/updateItem/${updatedItem._id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res;
            })
    }
}