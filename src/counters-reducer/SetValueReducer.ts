const initialState: ValueStateType = {value: 0}
export type ValueStateType = {
    value: number
}


export const SetValueReducer = (state = initialState, action: ChangeValueACType): ValueStateType => {
    switch (action.type) {
        case 'CHANGE-VALUE': {
            return {...state, value: state.value + 1}
        }
        default:
            return state
    }
}
type ChangeValueACType = ReturnType<typeof changeValueAC>
export const changeValueAC = () => {
    return {
        type: 'CHANGE-VALUE'
    } as const
}