/** @format */

import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
// import { thunk } from "redux-thunk";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const NODE_ENV = import.meta.env.VITE_NODE_ENV;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnhencer =
  (NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composeEnhancers = composeEnhencer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
