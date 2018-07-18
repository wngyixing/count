import {getInitalNumApi} from "../../api/index.js"
export const TEST_ADD="text-add"
export const TEST_DIS="text-dis"
export const TEST_INIT="text-init"
export function getInitalNum(dispatch){
    getInitalNumApi().then((num)=>{
        dispatch({type:TEST_INIT,num})
    })
}