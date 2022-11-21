import axios from 'axios';
const getData = axios.create({
    baseURL: "https://naijarestaurants.herokuapp.com"
})
getData.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    console.log('i am here');
    return config;
},
function(error){
    return Promise.reject(error);
}
);
getData.interceptors.response.use(function(response) {
    console.log('response', response)
    console.clear()
    return response;
}, function(error){
    return Promise.reject(error);
})
export default getData;