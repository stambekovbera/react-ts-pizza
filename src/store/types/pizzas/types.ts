import {IPizzas} from "../../../types/Pizzas/types";

export interface IPizzasState {
    pizzas: IPizzas[],
    isLoading: boolean
}

export enum pizzasActionTypes {
    SET_PIZZAS = "SET_PIZZAS",
    SET_LOADING = "SET_LOADING",
}

export interface ISetPizzas {
    type: pizzasActionTypes.SET_PIZZAS,
    payload: IPizzas[];
}

export interface ISetLoading {
    type: pizzasActionTypes.SET_LOADING
}

export type PizzasAction = ISetPizzas | ISetLoading;
