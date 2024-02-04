import { useDispatch, useSelector } from 'react-redux';

import { SetTheme } from '../stores/AppStore';

export function useApp() {
	const { theme } = useSelector((store: any) => store.app);

	const dispatch = useDispatch();

	const setTheme = (themeType: string) => {
		dispatch(SetTheme(themeType));
	};

	return {
		theme,
		setTheme,
	};
}
