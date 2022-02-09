import auth_reducer from "./authReducer";
import conv_reducer from "./conversationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth_reducer,
    conv_reducer
})

export default rootReducer