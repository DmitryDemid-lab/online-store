import axios from 'axios'
import {ItemsType, ItemType} from "../features/items/itemsTypes";

const instanceApi = axios.create({
    baseURL: 'https://online-store-1600b-default-rtdb.firebaseio.com/'
})

export const itemsAPI = {
    fetchItems() {
        return instanceApi.get<ItemsType>('items.json')
    },
    changeItemStatus(id: string, isAdded: boolean) {
        return instanceApi.put(`items/${id}/isAdded.json`, isAdded)
    }
}

export const cartAPI = {
    fetchCartItems() {
        return instanceApi.get<ItemsType>('cart/cartItems.json')
    },
    createCartArray() {
        return instanceApi.post(`cart/cartItems.json`, [])
    },
    addNewItemToCart(newCartItem: ItemType, id: string) {
        //  return instanceApi.post<{name: string}>(`cart/cartItems.json`, newCartItem)
        return instanceApi.patch(`cart/cartItems/${id}.json`, newCartItem)
    },
    removeItemFromCart(id: string) {
        return instanceApi.delete(`cart/cartItems/${id}.json`)
    }
}