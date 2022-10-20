import { combineReducers } from "@reduxjs/toolkit";
import apartmentReducer from "./apartments/apartments.reducer";
import themeReducer from "./theme/theme.reducer";


const rootReducer = combineReducers({
    theme: themeReducer,
    apartments: apartmentReducer,
})


export default rootReducer