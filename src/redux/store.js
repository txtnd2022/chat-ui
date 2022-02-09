import { createStore } from "redux";
import rootReducer from "./reducers";

const GLOBAL_STORE = createStore(rootReducer)

export default GLOBAL_STORE