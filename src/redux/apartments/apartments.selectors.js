import { createSelector } from "@reduxjs/toolkit";



const selectApartments = (state) => state.apartments;

export const selectAllApartments = createSelector([selectApartments], (apartments) => apartments.apartmentList);