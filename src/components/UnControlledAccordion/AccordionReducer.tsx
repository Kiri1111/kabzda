type ActionType = {
    type: 'TOGGLE-COLLAPSED'
}
export type StateType = {
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export const accordionReducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            // console.log(state.collapsed)
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }

}