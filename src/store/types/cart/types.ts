export interface ICartState{
    id: number,
    imageUrl: string,
    name: string,
    type: number,
    size: number,
    price: number,
    category: number,
    rating: number,
    count: number,
}

export enum ICartActionTypes {
    ADD_ITEM_CART = "ADD_ITEM_CART",
    REMOVE_ITEM_CART = "REMOVE_ITEM_CART",
    CLEAR_CART = "CLEAR_CART",
    PLUS_COUNT_ITEM = "PLUS_COUNT_ITEM",
    MINUS_COUNT_ITEM = "MINUS_COUNT_ITEM"
}

export interface AddItemCart {
    type: ICartActionTypes.ADD_ITEM_CART,
    payload: ICartState,
}

export interface RemoveItemCart {
    type: ICartActionTypes.REMOVE_ITEM_CART,
    payload: number,
}

export interface ClearCart {
    type: ICartActionTypes.CLEAR_CART,
}

export interface PlusCountItem {
    type: ICartActionTypes.PLUS_COUNT_ITEM,
    payload: number,
}

export interface MinusCountItem {
    type: ICartActionTypes.MINUS_COUNT_ITEM,
    payload: number,
}

export type CartAction = AddItemCart | RemoveItemCart | ClearCart | PlusCountItem | MinusCountItem;
