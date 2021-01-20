import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://18.233.171.47/`,
});
instance.interceptors.request.use(req => {
    req.headers['Content-Type'] = 'application/json';
    req.headers['Accept'] = 'application/json';
    return req;
})


export const dataAPI = {
    getData(name) {
        return instance.get(`api/v1/foods/list?cafe=${name}`).then(response => {
            return response.data;
        })
    },
    postOrder(name, phone, table, comment, items) {
        const body = JSON.stringify({ name, phone, table, comment, items });
        return instance.post(`api/v1/foods/order`, body).then(response => {
            console.log(response)
            return response;
        })

    }
}

