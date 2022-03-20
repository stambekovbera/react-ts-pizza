import React, {FC, memo} from 'react';

interface CategoriesProps {
    activeCategory: number | null,
    items: string[],
    onChangeCategory: (index: number | null) => void;
}

const Categories: FC<CategoriesProps> = memo(({activeCategory, items, onChangeCategory}) => {
    return (
        <div className="categories">
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onChangeCategory(null)}>
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onChangeCategory(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
});

export default Categories;