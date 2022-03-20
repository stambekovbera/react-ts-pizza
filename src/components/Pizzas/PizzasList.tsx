import React, {FC} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import PizzasItem from "./PizzasItem";
import PizzasLoading from "./PizzasLoading";

const PizzasList: FC = () => {
    const {pizzas, isLoading} = useTypedSelector(state => state.pizzas);
    const loadingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            {isLoading
                ? pizzas.map(pizza => {
                    return (
                        <PizzasItem key={pizza.id} pizza={pizza}/>
                    )
                })
                : loadingArr.map((index) => {
                    return (
                        <PizzasLoading key={index}/>
                    )
                })}
        </>
    );
};

export default PizzasList;