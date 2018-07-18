import {getAllusers,submituser,delUserApi,editUserApi} from "../../api/userManger.js"
import {GLOBAL_ISLOADING} from './global';
export const USER_INIT="USER_INIT"
export const USER_ADD='USER_ADD'
export const USER_ISADD='USER_ISADD'
export const USERMANGER_USER_DEL = 'USERMANGER_USER_DEL';
export const USER_ISDEL = 'USER_ISDEL';
export const USERMANGER_EDIT_USER = 'USERMANGER_EDIT_USER';
export const USERMANGER_ISEDIT = 'USERMANGER_ISEDIT';
export let getAllusersDis=(dispatch)=>{
    //dispatch({type:GLOBAL_ISLOADING,isLoading:true});
    getAllusers().then((res)=>{
        //dispatch({type:GLOBAL_ISLOADING,isLoading:false});
        // if(res.data.code === 1){
        //     let users = res.data.data;
        //     dispatch({type:USER_INIT,users});
        //     dispatch({type:USER_ISADD,isAdd:null});
        // }
        let users=res.data
        dispatch({type:USER_INIT,users});
        dispatch({type:USER_ISADD,isAdd:null})
    })
}
export let submituserDis=(data)=>{
    return (dispatch)=>{
         //dispatch({type:GLOBAL_ISLOADING,isLoading:true});
        submituser(data).then((res)=>{
           //dispatch({type:GLOBAL_ISLOADING,isLoading:false});
            if(res.data.code===1){
                dispatch({type:USER_ADD,userinfo:data})
                dispatch({type:USER_ISADD,isAdd:true})
            }else{
                dispatch({type:USER_ISADD,isAdd:false})
            }
        })
    }
}
export let delUserDispatch = (userid)=>{
    return (dispatch)=>{
         //dispatch({type:GLOBAL_ISLOADING,isLoading:true});
        delUserApi(userid).then(response=>{
            //dispatch({type:GLOBAL_ISLOADING,isLoading:false});
            if(response.data.code===1){
                dispatch({type:USERMANGER_USER_DEL,userid});
                dispatch({type:USER_ISDEL,isDel:true});
            }
        })
    }
}
export let editUserDispatch = (userid,username)=>{
    console.log(userid)
    return (dispatch)=>{
        //dispatch({type:GLOBAL_ISLOADING,isLoading:true});
        editUserApi(userid,username).then((response)=>{
            //dispatch({type:GLOBAL_ISLOADING,isLoading:false});
            if(response.data.code===1){
                dispatch({type:USERMANGER_EDIT_USER,userid,username});
                dispatch({type:USERMANGER_ISEDIT,isEdit:true});
            }
        })
    }
}