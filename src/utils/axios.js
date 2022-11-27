import axios from "axios"
import { toast } from "react-toastify"

export const postMutate = async(url, data, headers) => {
   return await axios({
        method: 'POST',
        headers: headers || {},
        url: url,
        data: data
      }).then(response => {return response.data})
      // .catch((errr) => {
      //   toast.info(`${errr.message} ! Please check your connection`, {type: "error"});
      // });
};
export const getApi = async(url, headers) => {
    axios({
        method: "get",
        url: url,
      }).then(function (response) {
        return response.data;
      })
}
export const get = async (url) => {
  let responce = await axios.get(url)
  // .then((res) => res.data)
  .catch((errr) => {
    toast.info(`${errr.message} ! Please check your connection`, {type: "error"});
  })
  return responce.data;
};











  









