import {FilterAction, filterActionTypes, IFilterState} from "../../types/filters/types";

const initialState: IFilterState = {
    category: null,
    sortBy: {
        type: "popular",
        order: 'desc'
    }
}

export const filtersReducers = (state = initialState, action: FilterAction): IFilterState => {
    switch (action.type) {
        case filterActionTypes.SET_CATEGORY:
            return {...state, category: action.payload};
        case filterActionTypes.SET_SORT:
            return {...state, sortBy: action.payload};
        default:
            return state;
    }
}