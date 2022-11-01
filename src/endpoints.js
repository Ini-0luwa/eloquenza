import axios from "axios"
// const axios = require('axios')

// const store_slug = 'eloquenza'
const base_url = `https://naijarestaurants.herokuapp.com`

function site_details(){
    let details = localStorage.getItem('eloquenza')
    if(!details){
        let eloquenza_data = {}
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

    register = async (first_name, last_name, email, phone_number, password, confirm_password) => {
        const url = `${base_url}/account/register`
        const payload = {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "phone_number": phone_number,
            "password": password,
            "confirm_password": confirm_password,
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

export class StoreAPI {

    constructor(token){
        this.token = token
        this.base_url = base_url
    }

    headers = () => {
        // token = localStorage.getItem('eloquenza_access_token')
        return { 
            'accept': 'application/json', 
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
          }
    }


    jsonPlaceholder = async () => {
        const url = `https://jsonplaceholder.typicode.com/posts`
        try{
            const response = await axios.get(url)
            return await response.data
        }
        catch (err) {
            return err.response.data
        }
    }

    //ALL STORE
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
    //END ALL STORE

    
    //STORE ID
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
    //END STORE ID


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


    //POST STOED_ID/CART
    postStoreIdCart = async (store_id, product_id, variation_id, quantity, store, uid) =>{
        const url = `${base_url}/store/${store_id}/cart`;
        const payload = {
            "product_id" : product_id,
            "variation_id": variation_id,
            "quantity": quantity,
            "store": store_id,
            "uid": uid,
        }
        try {
            const response = await axios.post(url, payload)
            const data = response.data
            return await data
        } catch (err) {
            console.log(err)
            return err.response.data
        }
    }
    //END POST STOED_ID/CART

    
    //GET STORE_ID/CATEGORY
    getStoreCategory = async(store_id) =>{
        const url = `${base_url}/store/${store_id}/categories`
        try {
            const response = await axios.get(url, {headers: this.headers()})
            return await response.data
        } catch (err) {
            return err.response.data
        }
    }
    //END GET STORE_ID/CATEGORY


    //GETSTORE_ID/CATEGORY_ID
    getStoreCategoryId = async(store_id, category_id) =>{
        const url = `${base_url}/store/${store_id}/categories/${category_id}`
        try {
            const response = await axios.get(url, {headers: this.headers()})
            const data =  response.data
            return await data
        } catch (err) {
            return err.response.data
        }
    }
    //END GETSTORE_ID/CATEGORY_ID


    //GETSTORECHECKOUT
    getStoreCheckout=async (store_id) => {
        const url = `${base_url}/store/${store_id}/checkout`
        try {
            const response = await axios.get(url, {headers: this.headers()})
            const data = response.data
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END GETSTORECHECKOUT


    //POSTSTORECHECKOUT
    postStoreCheckout=async (store_id, data, cart, store, payment_option, card, coupon, pin, delivery_option, callback_url) => {
        const url = `${base_url}/store/${store_id}/checkout`
        const payload = {
            "data": data,
            "cart": cart,
            "store": store,
            "payment_option": payment_option,
            "card": card,
            "coupon": coupon,
            "pin": pin,
            "delivery_option": delivery_option,
            "callback_url": callback_url
        }
        try {
            const response = await axios.post(url, payload)
            const data = response.data
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END POSTSTORECHECKOUT


    //POSTSTORECHECKOUTPAYMENT
    postStoreCheckoutpayment=async (store_id, data, cart, store, payment_option, card, coupon, pin, delivery_option, callback_url) => {
        const url = `${base_url}/store/${store_id}/checkout-payment`
        const payload = {
            "data": data,
            "cart": cart,
            "store": store,
            "payment_option": payment_option,
            "card": card,
            "coupon": coupon,
            "pin": pin,
            "delivery_option": delivery_option,
            "callback_url": callback_url
        }
        try {
            const response = await axios.post(url, payload)
            const data = response.data
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END POSTSTORECHECKOUTPAYMENT


    //STOREDETAILS
    storeDetails=async (store_id) => {
        const url = `${base_url}/store/${store_id}/details`
        try {
            const response = await axios.post(url, {headers: this.headers()})
            const data = response.data
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END STOREDETAILS


    //STOREPRODUCTS
    storeProducts = async (store_id) => {
        const url = `${base_url}/store/${store_id}/products`
        try {
            const response = await axios.get(url)
            const data = await response.data
            console.log(data)
            return await data
        } catch (err) {
            return err
        }
    }
    //END STOREPRODUCTS


    //STOREPRODUCTSID
    storeProductsId = async (store_id, product_id) => {
        const url = `${base_url}/store/${store_id}/products/${product_id}`
        try {
            const response = await axios.post(url, {headers: this.headers()})
            const data = response.data
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END STOREPRODUCTSID


    //ALL STORE
    allStore = async () => {
        const url = `${base_url}/store/all`
        try {
            const response = await axios.get(url)
            const data = response.data
            console.log(data)
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END ALL STORE


    //ALL COMPLETE CARD PAYMENT
    completeCardPayment = async () => {
        const url = `${base_url}/store/complete-card-payment`
        try {
            const response = await axios.get(url)
            console.log(response)
            const data = response.data
            console.log(data)
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END COMPLETE CARD PAYMENT


    //storeOrder
    storeOrder = async () => {
        const url = `${base_url}/store/order`
        try {
            const response = await axios.get(url)
            const data = response.data
            console.log(data)
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END storeOrder


    //storeOrderId
    storeOrderId = async (id) => {
        const url = `${base_url}/store/order${id}`
        try {
            const response = await axios.post(url, {headers: this.headers()})
            const data = response.data
            return await data
        } catch (error) {
            return error.response.data
        }
    }
    //END storeOrderId


}

var account = new AccountAPI()
// account.login(phone="08026785522", password="Femi@01#")

// var api = new StoreAPI(token='123445')

// // Get all product
// let product = api.storeProducts(store_id=store_slug)
// product.then((result) => {
//     console.log(`Response: ${JSON.stringify(result)}`)
// }).catch((err) => {
//     console.error(`Error: ${err}`)
// });

// Get all Store
// let store = api.allStore()
// store.then((result) => {
//     console.log(`Response: ${JSON.stringify(result)}`)
// }).catch((err) => {
//     console.error(`Error: ${err}`)
// });

// Get completeCardPayment
// let payment = api.completeCardPayment()
// payment.then((result) => {
//     console.log(`Response: ${JSON.stringify(result)}`)
// }).catch((err) => {
//     console.error(`Error: ${err}`)
// });


// Get completeCardPayment
// let order = api.storeOrder()
// order.then((result) => {
//     console.log(`Response: ${JSON.stringify(result)}`)
// }).catch((err) => {
//     console.error(`Error: ${err}`)
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
