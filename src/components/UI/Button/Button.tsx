import React, {FC} from 'react';
import cn from "classnames";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({children, className, onClick}) => {

    return (
        <button className={cn('button', className)} onClick={onClick}>{children}</button>
    );
};

export default Button;