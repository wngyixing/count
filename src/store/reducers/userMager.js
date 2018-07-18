import {USER_ADD,USER_INIT,USER_ISADD,USERMANGER_USER_DEL,USER_ISDEL,USERMANGER_EDIT_USER,USERMANGER_ISEDIT} from "../actions/userMager.js"
let oTypes={
    [USER_ADD](state,action){
        state.userlist.push(action.userinfo)  
        console.log(state.userlist)
    },
    [USER_INIT](state,action){
        state.userlist=action.users
      
    },
    [USER_ISADD](state,action){
         state.isAdd=action.isAdd
    },
     [USERMANGER_USER_DEL](state,action){
        let userid = action.userid;
        let index = state.userlist.findIndex(item=>userid===item.userid);
        console.log(userid)
        state.userlist.splice(index,1);
    },
    [USER_ISDEL](state,action){
        state.isDel = action.isDel;
    },
     [USERMANGER_EDIT_USER](state,action){
        let {userid,username} = action;
        console.log(action)
        let index = state.userlist.findIndex(item=>userid===item.userid);
        console.log(index)
        console.log(state.userlist)
        state.userlist[index].username = username;
    },
    [USERMANGER_ISEDIT](state,action){
        state.isEdit = action.isEdit;
    }
}
export let userMager=(state={userlist:[],isAdd:null},action)=>{
    oTypes[action.type]&&oTypes[action.type](state,action)
    return {...state,userlist:[...state.userlist]}
   
}