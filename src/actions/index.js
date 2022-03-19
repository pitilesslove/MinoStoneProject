import {
    SELECT_UNIT,
    ADD_UNIT_READY,
    DRAW_SKILL_INFORMATION_WINDOW,
    REMOVE_SKILL_INFORMATION_WINFOW
} from '../constants/ActionTypes'

export const selectUnitAction = (unit) => {
    console.log("selectUnit", unit);
    return {
        type: SELECT_UNIT,
        payload: unit
    }
}

export const addUnitReadyAction = (unit) => {
    console.log("addUnitReady", unit);
    return {
        type: ADD_UNIT_READY,
        payload: unit
    }
}

export const drawSkillInformationWindowAction = (unit) => {
    console.log("drawSkillInformationWindowAction", unit);
    return {
        type: DRAW_SKILL_INFORMATION_WINDOW,
        payload: unit
    }
}
