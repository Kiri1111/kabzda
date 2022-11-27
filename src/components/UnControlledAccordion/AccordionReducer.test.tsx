import {accordionReducer, StateType, TOGGLE_COLLAPSED} from "./AccordionReducer";

test('Reducer test', () => {
    const state: StateType = {
        collapsed: true
    }

    const newState = accordionReducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe(false)
})