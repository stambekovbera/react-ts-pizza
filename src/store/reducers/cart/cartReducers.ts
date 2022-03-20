import {CartAction, ICartActionTypes, ICartState} from "../../types/cart/types";

const initialState: ICartState[] = [];

export const cartReducers = (state = initialState, action: CartAction): ICartState[] => {
    switch (action.type) {
        case ICartActionTypes.ADD_ITEM_CART: {
            const cart = [...state];
            const pizzaCart = action.payload;
            const {type, size, count} = action.payload;
            const foundProduct = cart.find(item => item.id === pizzaCart.id);
            
            if (foundProduct) {
                foundProduct.count += count;
            } else {
                cart.push({
                    ...pizzaCart,
                    type: type,
                    size: size,
                    count: count,
                })
            }

            return cart;

        }
        case ICartActionTypes.REMOVE_ITEM_CART:
            return state.filter(item => item.id !== action.payload);
        case ICartActionTypes.CLEAR_CART: {
            const cart = [...state];
            cart.length = 0;
            return cart;
        }
        case ICartActionTypes.PLUS_COUNT_ITEM: {
            const cart = [...state];
            const id = action.payload;

            const foundProduct = cart.find(item => item.id === id);

            if (foundProduct) {
                foundProduct.count += 1;
                cart.forEach((item, index) => {
                    if (item.id === id) {
                        cart.splice(index, 1, foundProduct);
                    }
                })
            }

            return cart;
        }
        case ICartActionTypes.MINUS_COUNT_ITEM: {
            const cart = [...state];
            const id = action.payload;

            const foundProduct = cart.find(item => item.id === id);

            if (foundProduct) {
                foundProduct.count -= 1;
                cart.forEach((item, index) => {
                    if (item.id === id) {
                        cart.splice(index, 1, foundProduct);
                    }
                })
            }

            return cart;
        }
        default:
            return state;
    }
}