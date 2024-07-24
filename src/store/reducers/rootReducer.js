import { combineReducers } from "@reduxjs/toolkit";

const initialReducer = (state = {}, action) => {
    switch (action.type) {
        default: 
            return state;
    }
};

const rootReducer = combineReducers({
    intial: initialReducer
});

export default rootReducer;