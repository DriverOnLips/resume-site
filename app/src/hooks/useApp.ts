import { useDispatch, useSelector } from 'react-redux';

import { SetTheme, ChangeThemeBtnVision } from '../stores/AppStore';

export function useApp() {
	const { theme, themeBtnVision } = useSelector((store: any) => store.app);

	const dispatch = useDispatch();

	const setTheme = (themeType: string) => {
		dispatch(SetTheme(themeType));
	};

	const changeThemeBtnVision = () => {
		dispatch(ChangeThemeBtnVision());
	};

	return {
		theme,
		themeBtnVision,
		setTheme,
		changeThemeBtnVision,
	};
}
