import {CartAction, ICartActionTypes, ICartState} from "../../types/cart/types";
import {Dispatch} from "react";

export const addItemAction = (payload: ICartState) => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch(addItemActionCreator(payload) as CartAction)
    }
}

export const removeItemAction = (payload: number) => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch(removeItemActionCreator(payload) as CartAction)
    }
}

export const clearItemsAction = () => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch(clearItemsActionCreator() as CartAction)
    }
}

export const plusCountItemAction = (payload: number) => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch(plusCountItemActionCreator(payload) as CartAction)
    }
}

export const minusCountItemAction = (payload: number) => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch(minusCountItemActionCreator(payload) as CartAction)
    }
}


const addItemActionCreator = (payload: ICartState) => ({
    type: ICartActionTypes.ADD_ITEM_CART,
    payload,
})

const removeItemActionCreator = (payload: number) => ({
    type: ICartActionTypes.REMOVE_ITEM_CART,
    payload,
})

const clearItemsActionCreator = () => ({
    type: ICartActionTypes.CLEAR_CART
})

const plusCountItemActionCreator = (payload: number) => ({
    type: ICartActionTypes.PLUS_COUNT_ITEM,
    payload
})

const minusCountItemActionCreator = (payload: number) => ({
    type: ICartActionTypes.MINUS_COUNT_ITEM,
    payload
})