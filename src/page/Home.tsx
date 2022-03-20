import React, {useCallback, useEffect} from 'react';
import Categories from "../components/Categories/Categories";
import {ISort} from "../types/Sort/types";
import Sort from "../components/Sort/Sort";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PizzasList from "../components/Pizzas/PizzasList";
import PizzasLoading from "../components/Pizzas/PizzasLoading";

const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems: ISort[] = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'desc'},
    {name: 'алфавит', type: 'name', order: 'asc'},
]


const Home = () => {
    const {isLoading} = useTypedSelector(state => state.pizzas)
    const {category, sortBy} = useTypedSelector(state => state.filters)
    const {setSort, setCategory, fetchPizzas} = useActions();

    const selectCategoryHandler = useCallback((index: number | null) => {
        setCategory(index);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const selectSortHandler = useCallback((obj: ISort) => {
        setSort(obj);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchPizzas(category, sortBy);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, sortBy])

    return (
        <>
            <div className="content__top">
                <Categories activeCategory={category} items={categoriesNames} onChangeCategory={selectCategoryHandler}/>
                <Sort activeSort={sortBy.type} items={sortItems} onSelectSort={selectSortHandler}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                <PizzasList/>
            </div>
        </>
    );
};

export default Home;