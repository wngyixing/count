import {TEST_ADD,TEST_DIS} from "../actions/test.js"
let typeFn={
    [TEST_ADD](state,action){
        state.num+=1
    },
    [TEST_DIS](state,action){

    }
}
let test=(state={num:0},action)=>{
    typeFn[action.type]&&typeFn[action.type](state,action)
    return state
}
export{test}