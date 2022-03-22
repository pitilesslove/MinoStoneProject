import {
    DRAW_SKILL_INFORMATION_WINDOW,
    SELECT_SKILL,
} from '../constants/ActionTypes'

const initialState = {
    payload: {
        id: -1,
        information: "",
        iconSrc: "",
        state: "IDLE"
    }
}

const skillReducer = (state = initialState, action) => {
    console.log("state", state);
    switch (action.type) {
        case DRAW_SKILL_INFORMATION_WINDOW:
            return { state, payload: action.payload };
        case SELECT_SKILL:
            console.log(SELECT_SKILL, action.payload);
            return { state, payload: action.payload };
        default:
            return state;
    }
}

export default skillReducer;