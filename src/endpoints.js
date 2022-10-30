const axios = require('axios');
const store_slug = 'eloquenza'
const base_url = `https://naijarestaurants.herokuapp.com`

function site_details(){
    let details = localStorage.getItem('eloquenza')
    if(!details){
        var eloquenza_data = {}
        localStorage.setItem('eloquenza', JSON.stringify(eloquenza_data))
    }
    return JSON.parse(localStorage.getItem('eloquenza'))
}

// site_details()

class AccountAPI {

    login = async (phone_number, password) => {
        const url = `${base_url}/account/login`
        const payload = {
            "phone_number": phone_number,
            "password": password
        }
        try{
            const response = await axios.post(url, payload)
            console.log(response)
            const data = response.data
            // alert(`Welcome ${data.first_name}`)
            const updateSite = site_details()
            updateSite['user'] = data
            localStorage.setItem('eloquenza', JSON.stringify(updateSite))
            return await data
        }
        catch (err) {
            console.log(err)
            alert(err.response.data.detail)
            return err.response.data
        }
    }

}

class StoreAPI {

    constructor(token){
        this.token = token
        this.base_url = base_url
    }

    headers = () => {
        token = localStorage.getItem('eloquenza_access_token')
        return { 
            'accept': 'application/json', 
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
          }
    }

    stores = async () => {
        const url = `${this.base_url}/store`
        try{
            const response = await axios.get(url)
            return await response.data
        }
        catch (err) {
            return err.response.data
        }
    }

    store = async (store_id) => {
        const url = `${this.base_url}/store/${store_id}`
        try{
            const response = await axios.get(url, {headers: this.headers()})
            return await response.data
        }
        catch (err) {
            return err.response.data
        }
    }

    // CART APIS
    getCart = async (store_id, uid=null) => {
        console.log(store_id)
        const url = `${this.base_url}/store/${store_id}/cart`
        try{
            const response = await axios.get(url, {headers: this.headers()})
            return await response.data
        }
        catch (err) {
            return err.response.data
        }
    }

    // CART APIS END

}

var account = new AccountAPI()
// account.login(phone="08026785522", password="Femi@01#")

var api = new StoreAPI(token='123445')

// Get all stores
// const stores = api.stores()
// stores.then((result) => {
//     console.log(JSON.stringify(result))
// }).catch((err) => {
//     console.log(err)
// });

// Get single store
// const store = api.singleStore(store_slug)
// store.then((result) => {
//     console.log(JSON.stringify(result))
//     const updateSite = site_details()
//     updateSite['store'] = result
//     localStorage.setItem('eloquenza', JSON.stringify(updateSite))
// }).catch((err) => {
//     console.log(err)
// })
