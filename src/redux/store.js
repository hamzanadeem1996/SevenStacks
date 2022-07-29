import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import RootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

const Store = createStore(persistedReducer, applyMiddleware(thunk));
const Persistor = persistStore(Store);

export { Store, Persistor };
