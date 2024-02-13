import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
	theme: string;
	themeBtnVision: boolean;
}

const initialState: AppState = {
	theme: 'black',
	themeBtnVision: true,
};

export const AppSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		SetTheme: (state, action: PayloadAction<string>) => {
			state.theme = action.payload;
		},
		ChangeThemeBtnVision: (state) => {
			state.themeBtnVision = !state.themeBtnVision;
		},
	},
});

export const appReducer = AppSlice.reducer;
export const { SetTheme, ChangeThemeBtnVision } = AppSlice.actions;
