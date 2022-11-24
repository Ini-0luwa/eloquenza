import axios from 'axios';
import { getToken } from '../components/auth/token';
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
    // console.log('response', response)
    // console.clear()
    return response;
}, function(error){
    return Promise.reject(error);
})
export default getData;
const URL = "https://naijarestaurants.herokuapp.com"
export const AppSetup = () => {
    axios.defaults.baseURL = `${URL}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.interceptors.request.use(
        function(config){
            const user = getToken();
            config.headers.common['Authorization'] = user ? `Bearer${user.token}` : null;
            return config;
        },
        function (error){
            return Promise.reject(error);
        }
    );
axios.interceptors.response.use(
    function(res) {
        if(res.status === 200 && res.config.method !== 'get'){
            if(res.data.token) return res;
        }
    }
)
}; 