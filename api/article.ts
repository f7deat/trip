import axios from "axios";

export function queryArtices() {
    return axios.get(`https://defzone.net/api/post/list-by-category/7?current=1&pageSize=5`);
}