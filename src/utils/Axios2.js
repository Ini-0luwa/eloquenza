import axios from 'axios';
import { toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';
// import { Toast } from 'react-toastify/dist/components';
import { ErrorHandler } from './error';

// const URL = process.env.REACT_APP_BASE_URL;
const URL = "https://naijarestaurants.herokuapp.com";


export const AppSetup = () => {
// setTimeout(function() {
//     // console.clear();
// }, 2000);
  axios.defaults.baseURL =` ${URL}`;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.interceptors.request.use(
    function (config) {
	// getUserFromLocalStorage() is a function, create your own oga
    const user = localStorage.getItem('token');
      // config.headers.common['Authorization'] = user ? Bearer ${user.token} : null;
      config.headers.common['Authorization'] = user ? `Bearer${user.token}` : null;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    function (response) {
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
      // console.log(response, 'response');
      return response;
    },
    function (error) {
      // console.log(error, ' error response');
      return Promise.reject(ErrorHandler(error));
    }
  );

  return;
}