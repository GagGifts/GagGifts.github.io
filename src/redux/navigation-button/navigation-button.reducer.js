import NavigationButtonActionTypes from "./navigation-button.types";

const INITIAL_STATE = {
    isToggle : false,
};

const navigationButtonReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavigationButtonActionTypes.TOGGLE_NAVIGATION:
            return {
                ...state,
                isToggle: !state.isToggle,
            };
        default:
            return state;
    }
};

export default navigationButtonReducer;
