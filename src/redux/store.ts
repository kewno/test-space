import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import brandsReducer from "./brandsReducer";
import languageReducer from "./languageReducer";


let reducer = combineReducers({
    brands : brandsReducer,
    language: languageReducer
},)

type ReducerType = typeof reducer

export type AppStateType = ReturnType<ReducerType>

// @ts-ignore
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducer, composeEnhancers( applyMiddleware(thunkMiddleware)));
// @ts-ignore
export type AppDispatch = ThunkDispatch<store, any, AnyAction>;

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never
// @ts-ignore
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export default store;