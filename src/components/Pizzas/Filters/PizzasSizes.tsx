import React, {FC} from 'react';
import classNames from "classnames";
import {TypeSetState} from "../../../types/types";


interface PizzasSizesProps {
    availableSizes: number[],
    activeSize: number,
    onSelectSize: TypeSetState<number>,
    pizzasSizes: number[]
}

const PizzasSizes: FC<PizzasSizesProps> = ({pizzasSizes, availableSizes, activeSize, onSelectSize}) => {
    return (
        <ul>
            {availableSizes.map((size) => (
                <li
                    key={size}
                    onClick={() => onSelectSize(size)}
                    className={classNames({
                        active: activeSize === size,
                        disabled: !pizzasSizes.includes(size),
                    })}>
                    {size} см.
                </li>
            ))}
        </ul>
    );
};

export default PizzasSizes;