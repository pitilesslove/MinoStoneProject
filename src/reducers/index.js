import { combineReducers } from "redux";
import unitReducer from "./unitReducer";
import skillReducer from "./skillReducer";

const rootReducer = combineReducers({
    unitReducer,
    skillReducer
})
export default rootReducer
