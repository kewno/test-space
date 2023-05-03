import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";
import {brendsAPI} from "../api/api";
import {DataBrends, DataBrendsItem, DataBrendsMeta} from "../types/types";


export const actions = {
    setBrands: (brands: DataBrends) => ({type: 'SET_BRANDS', brands} as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>
export type DispatchType = Dispatch<ActionsTypes>

export type initBrandsType = {
    brands: DataBrendsItem[]
    meta: DataBrendsMeta
}

let initBrands: initBrandsType = {
    brands: [] as DataBrendsItem[],
    meta: {
        currentPage: 0,
        pageCount: 0,
        perPage: 0,
        totalCount: 0
    }
}

export const setDataBrandsThunkCreator = () : ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch: DispatchType) => {
        let response = await brendsAPI.getBrends()
        dispatch(actions.setBrands(response))
    }
}

let brandsReducer = (state = initBrands, action: ActionsTypes) => {
    let stateClone = {...state}

    if (action.type === 'SET_BRANDS') {
        stateClone.brands = [...stateClone.brands]
        stateClone.brands = action.brands.items

        stateClone.meta = action.brands._meta
    }
    return stateClone
}

export default brandsReducer