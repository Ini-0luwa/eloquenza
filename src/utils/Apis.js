import axios from 'axios';
import { toast } from 'react-toastify';
import { getToken } from '../components/auth/token';
import { ErrorHandler } from './error';
const getData = axios.create({
    baseURL: "https://naijarestaurants.herokuapp.com",
    headers: {
        'Content-Type': 'application/json'
    },
})
getData.interceptors.request.use(function(config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
    setTimeout(function() {
        console.clear()
        console.log('i am here');
    }, 1000);
    return config;
},
function(error){
    return Promise.reject(error);
}
);
getData.interceptors.response.use(function(response) {
    setTimeout(function() {
        // console.clear()
        console.log(response);
    if (response.status === 200 && response.config.method !== 'get') {
        if (response.data.token) return response;

        // The below will be used to handle post response
        if (response.data.status === true) {
	//install a toast package and pass in response.data.message as the message
          toast(response.data.message, {type: 'success', uniqueId: 200 });
        } else if (response.data.status === false) {
          toast(response.data.message, {type: 'warning', uniqueId: 201 });
        } else {
          toast(response.data.message, {type: 'danger', uniqueId: 202 });
        }
        return response;
      }
      if (response.status === 220) {
        toast({
          msg:` ${response.data.message}`,
          type: 'info',
          uniqueId: 220,
        });
        return response;
      }
    }, 4000);
    return response;
}, function(error){
    return Promise.reject(ErrorHandler(error));
})
export default getData;