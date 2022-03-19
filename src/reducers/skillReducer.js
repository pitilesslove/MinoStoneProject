import {
    DRAW_SKILL_INFORMATION_WINDOW,
} from '../constants/ActionTypes'

const initialState = {
    payload: {
        id: -1,
        information: "",
        iconSrc: "",
    }
}

const skillReducer = (state = initialState, action) => {
    console.log("state", state);
    switch (action.type) {
        case DRAW_SKILL_INFORMATION_WINDOW:
            console.log(DRAW_SKILL_INFORMATION_WINDOW, action.payload);
            return { state, payload: action.payload };
        default:
            return state;
    }
}

export default skillReducer;