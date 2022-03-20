import React, {FC, useState} from 'react';
import PizzasTypes from "./Filters/PizzasTypes";
import {IPizzas} from "../../types/Pizzas/types";
import Button from "../UI/Button/Button";
import PizzasSizes from "./Filters/PizzasSizes";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface PizzasItemProps {
    pizza: IPizzas
}

const availableTypes = ['тонкое', 'традиционное'];
const availableSizes = [26, 30, 40];

const PizzasItem: FC<PizzasItemProps> = ({pizza}) => {
    const cartItem = useTypedSelector(state => state.cart);
    const addedCount = cartItem.find(item => item.id === pizza.id)?.count;
    const [count, setCount] = useState(addedCount || 0)
    const [activeType, setActiveType] = useState(pizza.types[0]);
    const [activeSize, setActiveSize] = useState(pizza.sizes[0]);
    const {addItemAction} = useActions();

    const addItemHandle = () => {
        if (count < 5) {
            addItemAction({...pizza, type: activeType, size: activeSize, count: 1});
            setCount(count + 1);
        }
    }
    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={pizza.imageUrl} alt="Pizza"/>
            <h4 className="pizza-block__title">{pizza.name}</h4>
            <div className="pizza-block__selector">
                <PizzasTypes availableTypes={availableTypes} activeType={activeType} onSelectType={setActiveType}
                             pizzasTypes={pizza.types}/>
                <PizzasSizes availableSizes={availableSizes} activeSize={activeSize} onSelectSize={setActiveSize}
                             pizzasSizes={pizza.sizes}/>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {pizza.price} ₽</div>
                <Button
                    onClick={() => addItemHandle()}
                    className="button--add button--outline">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>
            </div>
        </div>
    );
};

export default PizzasItem;