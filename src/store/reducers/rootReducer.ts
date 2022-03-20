import {combineReducers} from "redux";
import {filtersReducers} from "./filters/filtersReducers";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {pizzasReducers} from "./pizzas/pizzasReducers";
import {cartReducers} from "./cart/cartReducers";

const rootReducer = combineReducers({
    filters: filtersReducers,
    pizzas: pizzasReducers,
    cart: cartReducers
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['filters', 'cart'],
    blacklist: ['pizzas']
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;