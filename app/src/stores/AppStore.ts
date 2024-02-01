import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface AppState {
  theme: string;
}

const initialState: AppState = {
  theme: 'black',
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    SetTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  }
});

export const appReducer = AppSlice.reducer;
export const {
  SetTheme,
} = AppSlice.actions;