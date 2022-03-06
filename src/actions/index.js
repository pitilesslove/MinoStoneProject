import {
    SELECT_UNIT,
    ADD_UNIT_READY
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