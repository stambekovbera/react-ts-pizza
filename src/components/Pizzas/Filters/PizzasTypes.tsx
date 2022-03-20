import React, {FC} from 'react';
import classNames from "classnames";
import {TypeSetState} from "../../../types/types";

interface PizzasTypesProps {
    availableTypes: string[],
    activeType: number,
    onSelectType: TypeSetState<number>,
    pizzasTypes: number[]
}


const PizzasTypes: FC<PizzasTypesProps> = ({availableTypes, activeType, onSelectType, pizzasTypes}) => {



    return (
        <ul>
            {availableTypes.map((type, index) => (
                <li
                    key={type}
                    onClick={() => onSelectType(index)}
                    className={classNames({
                        active: activeType === index,
                        disabled: !pizzasTypes.includes(index),
                    })}>
                    {type}
                </li>
            ))}
        </ul>
    );
};

export default PizzasTypes;