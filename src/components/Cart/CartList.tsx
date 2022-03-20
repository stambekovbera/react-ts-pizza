import React, {FC} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import CartItem from "./CartItem";

const CartList: FC = () => {
    const pizzasInCart = useTypedSelector(state => state.cart);

    return (
        <>
            {
                pizzasInCart.map(pizza => {
                    return (
                        <CartItem key={pizza.id} pizzaCart={pizza}/>
                    )
                })
            }
        </>
    );
};

export default CartList;