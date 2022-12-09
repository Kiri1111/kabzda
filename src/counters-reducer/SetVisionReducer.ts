const initialState: VisionStateType = {condition: true}
export type VisionStateType = {
    condition: boolean
}


export const SetVisionReducer = (state = initialState, action: ChangeConditionACType): VisionStateType => {
    switch (action.type) {
        case "CHANGE-CONDITION": {
            return {...state, condition: !state.condition}
        }
        default:
            return state
    }
}
type ChangeConditionACType = ReturnType<typeof changeConditionAC>
export const changeConditionAC = () => {
    return {
        type: 'CHANGE-CONDITION'
    } as const
}