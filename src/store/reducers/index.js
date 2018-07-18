import {combineReducers} from "redux";
import {test} from "./test.js"
import {userMager} from "./userMager.js"
let reducer=combineReducers({
    test,userMager
});
export default reducer;