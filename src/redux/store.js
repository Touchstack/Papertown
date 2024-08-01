import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import userReducer from "./features/userSlice";
import getToKnowYouReducer from "./features/getToKnowYouSlice";
import setUpAccountReducer from "./features/setUpAccountSlice";
import guardianCheckedReducer from "./features/guardianCheckedSlice";
import guardianInfoReducer from "./features/guardianInfoSlice";
import yourChildInfoReducer from "./features/yourChildInfoSlice";
import resetPasswordEmailReducer from "./features/resetPasswordEmailSlice";

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  getToKnowYou: getToKnowYouReducer,
  setUpAccount: setUpAccountReducer,
  guardianChecked: guardianCheckedReducer,
  guardianInfo: guardianInfoReducer,
  yourChildInfo: yourChildInfoReducer,
  resetPasswordEmail: resetPasswordEmailReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
