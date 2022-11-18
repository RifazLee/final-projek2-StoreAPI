import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from '../features/productSlice';
import authReducer from '../features/loginSlice';
import detailReducer from '../features/detailSlice';
import cartReducer from '../features/cartSlice';

const reducers = combineReducers({
  products: productReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    detail: detailReducer,
    cart: cartReducer,
    persistedReducer,
  },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
  
});

const persistor = persistStore(store);

export default { store, persistor };