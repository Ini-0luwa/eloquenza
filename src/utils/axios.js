import axios from "axios"

export const postMutate = async(url, data, headers) => {
    await axios({
        method: 'POST',
        headers: headers || {},
        url: url,
        data: data
      }).then(response => response).catch(error=> error)
}

export const getApi = async(url, headers) => {
    axios({
        method: "get",
        url: url,
      }).then(function (response) {
        // setTimeout(function() {
          // console.log(response.data, "data");
          // body
        // }, 5000);
        // export const data = response.data;
        // return response.data;
        
      });
}