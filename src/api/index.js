import axios from "axios";
// import {PORT} from "./port.js"
export function getInitalNumApi(){
    return axios.get('/num')
}