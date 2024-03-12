import axios from "axios";

export function getProduct(pagenumber) {
    return axios.get("https://dummyjson.com/products?limit=5&skip=" + ((pagenumber - 1) * 5))
}