import axios from 'axios';

class Api {

    // configuration
    endpoint = 'http://localhost:8000';
    headers = {
        'Accept':'application/json',
        'Authorization': null
    }

    setAuth = token => {
        this.headers.Authorization = `Bearer ${token}`
    }
    post = (action, parameters) => {
        const promise = axios({
            method: 'POST',
            url: this.endpoint + '/' + action,
            data: parameters,
            headers: this.headers
        });

        return promise;
    }

    get = (action, parameters) => {
        const promise = axios({
            method: 'GET',
            url: this.endpoint + '/' + action,
            data: parameters,
            headers: this.headers
        });

        return promise;
    }

}

export default new Api();