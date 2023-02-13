import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth';
import employeeReducer from "./employee";
import clientReducer from "./client";
import maintenance from "./maintenance ";
const persistConfig = {
    key: 'root',
    storage,
    
  };


const reducer = combineReducers({
    auth: authReducer,
    employee: employeeReducer,
    client: clientReducer,
    maintenance: maintenance
});
const persistedReducer = persistReducer(persistConfig, reducer)

const store =  configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);
export default store;