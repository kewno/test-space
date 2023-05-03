import {Dispatch} from "redux";
import {AppStateType, InferActionsTypes} from "./store";
import {getLanguageStorage, setLanguageStorage} from "../helpsFunctions";


export const actions = {
    setLanguage: (language: string) => ({type: 'SET_LANGUAGE', language} as const),
    getLanguage: () => ({type: 'GET_LANGUAGE'} as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>
export type DispatchType = Dispatch<ActionsTypes>

export type initLanguageType = {
    language: string
}

let initLanguage: initLanguageType = {
    language: null as unknown as string,
}

let languageReducer = (state = initLanguage, action: ActionsTypes) => {
    let stateClone = {...state}

    if (action.type === 'SET_LANGUAGE') {
        setLanguageStorage(action.language)
        stateClone.language = getLanguageStorage()
    } else if (action.type === 'GET_LANGUAGE') {
        stateClone.language = getLanguageStorage()
    }
    return stateClone
}

export default languageReducer