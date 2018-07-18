import {createStore,applyMiddleware} from "redux";
import reducer from "./reducers";
import Thunk from "redux-thunk";
const store=createStore(reducer,applyMiddleware(Thunk));
if(process.env.NODE_ENV==="development"){
    window.store=store
}
export default store;