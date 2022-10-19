import { combineReducers } from "@reduxjs/toolkit";

import themeReducer from "./theme/theme.reducer";


const rootReducer = combineReducers({
    theme: themeReducer,
})


export default rootReducer