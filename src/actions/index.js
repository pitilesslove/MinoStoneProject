import {
    SELECT_UNIT,
    ADD_UNIT_READY,
    DRAW_SKILL_INFORMATION_WINDOW,
    SELECT_SKILL,
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

export const drawSkillInformationWindowAction = (skill) => {
    console.log("drawSkillInformationWindowAction", skill);
    return {
        type: DRAW_SKILL_INFORMATION_WINDOW,
        payload: skill
    }
}

export const selectSkillAction = (skill) => {
    console.log("selectSkillAction", skill);
    return {
        type: SELECT_SKILL,
        payload: skill
    }
}
