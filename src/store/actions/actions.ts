import * as FiltersActions from "./filters/filtersActions";
import * as PizzasActions from "./pizzas/pizzasActions";
import * as CartActions from "./cart/cartActions";

export const ActionCreators = {
    ...FiltersActions,
    ...PizzasActions,
    ...CartActions
}