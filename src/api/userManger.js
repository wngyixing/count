import axios from "axios";
import {PORT,typePort} from "./port.js"
export const getAllusers=()=>{
    return axios.get(typePort+'/getallusers')
}
export const submituser=(data)=>{
    return axios.post(typePort+'/submituser',data)
}
export const delUserApi = (userid)=>{
    return axios.post(PORT+'/deluser',{userid});
}
export const editUserApi = (userid,username)=>{
    return axios.post(PORT+'/edituser',{userid,username});
}