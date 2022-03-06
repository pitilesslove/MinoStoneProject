import {
    SELECT_UNIT,
    ADD_UNIT_READY
} from '../constants/ActionTypes'

const initialState = {
    payload: {
        id: -1,
        attack: 0,
        life: 0,
    }
}

const unitReducer = (state = initialState, action) => {
    console.log("state", state);
    switch (action.type) {
        case SELECT_UNIT:
            console.log(SELECT_UNIT, action.payload);
            return { state, payload: action.payload };
        // return Object.assign({}, state, {
        //     payload: action.payload
        // });
        case ADD_UNIT_READY:
            console.log(ADD_UNIT_READY, action.payload);
            return [state, action.payload];
        default:
            return state;
    }
}

export default unitReducer;