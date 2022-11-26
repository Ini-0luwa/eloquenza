import axios from "axios"

export const postMutate = async(url, data, headers) => {
  let post = await axios({
        method: 'POST',
        headers: headers || {},
        url: url,
        data: data
      });
      return post;
}
export const getApi = async(url, headers) => {
    axios({
        method: "get",
        url: url,
      }).then(function (response) {
        return response.data;
      });
}
export const get = async (url) => {
  let responce = await axios.get(url);
  return responce.data;
};











  









