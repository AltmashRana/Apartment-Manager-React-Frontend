import { createSelector } from "@reduxjs/toolkit";

const themeMode = (state) => state.theme;

export const getThemeMode = createSelector([themeMode], (theme) => theme.mode);