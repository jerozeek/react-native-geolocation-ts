import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Clinician, CliniciansState} from "../../interfaces";

const initialState: CliniciansState = {
    isLoaded: false,
    data: [],
    favoriteClinician: undefined,
}

export const cliniciansSlices = createSlice({
    name: 'clinicians',
    initialState,
    reducers: {
       getClinicians: (state, action: PayloadAction<Clinician[]>) => {
           const data = [...action.payload];
           state.data = data.sort((a, b) => a.firstName.localeCompare(b.firstName));
       },
         selectFavoriteClinician: (state, action: PayloadAction<Clinician | undefined>) => {
              state.favoriteClinician = action.payload;
         }
    },
})

// Action creators are generated for each case reducer function
export const { actions: cliniciansActions, reducer: cliniciansReducer } = cliniciansSlices;