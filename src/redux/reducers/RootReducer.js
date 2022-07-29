import { combineReducers } from "redux";
import serviceReducer from "./serviceReducer";

const RootReducer = combineReducers({
  services: serviceReducer,
});

const rootReducer = (state, action) => RootReducer(state, action);
export default rootReducer;
