import axios from 'axios';

class Api {

    // configuration
    endpoint = 'http://localhost:8000';
    headers = {
        'accept':'application/json',
        'Content-Type':'application/json',
        'authorization': null
    }

    setAuth = token => {
        this.headers.authorization = `Token ${token}`
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