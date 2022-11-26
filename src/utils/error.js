// import { Toast } from "react-toastify/dist/components";

import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";


export const ErrorHandler = (error) => {
  
    // dont handle this error yet without passing a header msg  specifying that token has expired from the  backend
    if (error.response.status === 401) {
      //Log  user out at this point
      return error;
    }
  
    if (!error.response) {
      //NOTE:this will also happen if server request fails
      // error.toJSON()
      // Toast({
      //   msg: 'Connection timeout',
      //   type: 'danger',
      //   uniqueId: 500,
      // });
      toast.dark('Connection timeout', {hideProgressBar: true, type: "info" , uniqueId: 500})
      return error;
    }
    
    if (error.response.status === 403) {
      toast.dark(error.response.data, {hideProgressBar: true, type: "info" , uniqueId: 500})
    //   Toast({
    //     msg: error.response.data,
    //     type: 'danger',
    //     uniqueId: 403,
    //   });
      return error;
    }
  
    if (error.response.status === 420) {
      toast.dark(error.response.data.message, {hideProgressBar: true, type: "info" , uniqueId: 500})
      // Toast({
      //   msg: error.response.data.message,
      //   type: 'info',
      //   uniqueId: 420,
      // });
      return error;
    }
    if (error.response.status >= 400 && error.response.status <= 500){
    if (error.response.status === 400) {
      if(error.response.data.errors && Object.values(error.response.data.errors)[0]){
        toast.dark(Object.values(error.response.data.errors)[0], {hideProgressBar: true, type: "info" , uniqueId: 500})
        // Toast({
        //   msg: Object.values(error.response.data.errors)[0], 
        //   uniqueId: 400,
        //   type: 'danger',
        // });
      }
      else if(error.response.data.Message){
        toast.dark(error.response.data.Message, {hideProgressBar: true, type: "info" , uniqueId: 500})
        // Toast({
        //   msg: error.response.data.Message,
        //   type: 'danger',
        //   uniqueId: 400,
        // });
      }
      else if(error.response.data.title){
        toast.dark(error.response.data.title, {hideProgressBar: true, type: "info" , uniqueId: 500})
        // Toast({
        //   msg: error.response.data.title,
        //   type: 'danger',
        //   uniqueId: 400,
        // });
      }
      else {
        toast.dark('Could not get error message', {hideProgressBar: true, type: "info" , uniqueId: 500})
        // Toast({
        //   msg: 'Could not get error message',
        //   type: 'danger',
        //   uniqueId: 400,
        // });
      }
      return error;
    }
  
    return error;
  }
}
