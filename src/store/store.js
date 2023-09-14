import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./root-reducer";

// const curryFunc = (a) => (b, c) => {
//   return a + b + c;
// };
// const tryOne = curryFunc(3);
// console.log("CURRY! ", tryOne(1, 7));

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next();
//   }

//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("current state", store.getState());

//   next(action);

//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("current state", store.getState());
// };

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
