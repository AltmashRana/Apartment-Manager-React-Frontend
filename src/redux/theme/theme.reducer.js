import { CHANGE_THEME_MODE } from "../CONSTANTS";

const _initialState = {
    mode: 'light'
}

const themeReducer = (state = _initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case CHANGE_THEME_MODE:
            return{
                ...state,
                mode: payload.mode,
            };
        default:
            return state;
    }
}

export default themeReducer;