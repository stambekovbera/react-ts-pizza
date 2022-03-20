import {FilterAction, filterActionTypes, ISortBy} from "../../types/filters/types";
import {Dispatch} from "react";

export const setCategory = (payload: number | null) => {
    return (dispatch: Dispatch<FilterAction>) => {
        dispatch(setCategoryAction(payload) as FilterAction)
    }
};

export const setSort = (payload: ISortBy) => {
    return (dispatch: Dispatch<FilterAction>) => {
        dispatch(setSortAction(payload) as FilterAction)
    }
}


const setCategoryAction = (payload: number | null) => ({
    type: filterActionTypes.SET_CATEGORY,
    payload
})

const setSortAction = (payload: ISortBy) => ({
    type: filterActionTypes.SET_SORT,
    payload,
})