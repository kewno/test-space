import axios from "axios"
import {DataBrends} from "../types/types";


const instanse = axios.create({
    baseURL : 'https://api.stoking.ru/v1/',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})

export let brendsAPI = {
    getBrends() {
        return instanse.get<DataBrends>(`brands?selection[filter]=[%7B"id":"used","value":1%7D]&expand=thumbnail.sizes&fields=id,name,slug,thumbnail.*&per-page=36&page=1&sort=-countDeal`)
            .then((response) => response.data)
    }
}