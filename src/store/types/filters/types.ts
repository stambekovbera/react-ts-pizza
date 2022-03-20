export interface IFilterState {
    category: number | null;
    sortBy: ISortBy;
}

export interface ISortBy {
    type: string,
    order: string;
}

export enum filterActionTypes {
    SET_SORT = "SET_SORT",
    SET_CATEGORY = "SET_CATEGORY",
}

export interface ISetSort {
    type: filterActionTypes.SET_SORT,
    payload: ISortBy;
}

export interface ISetCategory {
    type: filterActionTypes.SET_CATEGORY,
    payload: number | null
}

export type FilterAction = ISetCategory | ISetSort;