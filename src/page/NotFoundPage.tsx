import React, {FC} from 'react';
import cartEmptyImage from "../assets/img/empty-cart.png";
import {Link} from "react-router-dom";

const NotFoundPage: FC = () => {
    return (
        <div className="cart cart--empty">
            <h2>
                Ошибка: <span className={'text-red-800'}>Страница не существует</span><i>😕</i>
            </h2>
            <p>
                Вероятнее всего вы перешли по несуществующей ссылке
                <br/>
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart"/>
            <Link to="/" className="button button--black">
                <span>На главную</span>
            </Link>
        </div>
    );
};

export default NotFoundPage;