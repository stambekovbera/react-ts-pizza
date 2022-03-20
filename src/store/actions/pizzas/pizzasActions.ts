import {Dispatch} from "react";
import {PizzasAction, pizzasActionTypes} from "../../types/pizzas/types";
import axios from "axios";
import {IPizzas} from "../../../types/Pizzas/types";
import {ISortBy} from "../../types/filters/types";
import PizzasLoading from "../../../components/Pizzas/PizzasLoading";

export const fetchPizzas = (category: number | null, sort: ISortBy) => {
    return async (dispatch: Dispatch<PizzasAction>) => {
        dispatch(setLoading() as PizzasAction);
        const url = `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sort.type}&_order=${sort.order}`;
        const response = await axios.get(url);
        setTimeout(() => {
            dispatch(setPizzas(response.data));
        }, 500)
    }
};

const setPizzas = (payload: IPizzas[]) => ({
    type: pizzasActionTypes.SET_PIZZAS,
    payload,
})
const setLoading = () => ({
    type: pizzasActionTypes.SET_LOADING
})