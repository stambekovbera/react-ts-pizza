import {IPizzasState, PizzasAction, pizzasActionTypes} from "../../types/pizzas/types";

const initialState: IPizzasState = {
    pizzas: [],
    isLoading: false
}


export const pizzasReducers = (state = initialState, action: PizzasAction): IPizzasState => {
    switch (action.type) {
        case pizzasActionTypes.SET_PIZZAS:
            return {...state, pizzas: action.payload, isLoading: true};
        case pizzasActionTypes.SET_LOADING:
            return {...state, isLoading: false}
        default:
            return state;
    }
}