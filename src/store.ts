import {combineReducers, createStore} from "redux";
import {SetValueReducer} from "./counters-reducer/SetValueReducer";
import {SetVisionReducer} from "./counters-reducer/SetVisionReducer";

export type rootReducerType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    value: SetValueReducer,
    vision: SetVisionReducer
})

export let store = createStore(rootReducer)