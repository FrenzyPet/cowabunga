import { useContext, useEffect } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme-context'

interface IUseThemeResult {
	toggleTheme: () => void
	theme: Theme
}

export const useTheme = (): IUseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme(newTheme)

		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	useEffect(() => {
		document.body.className = theme
	}, [theme])

	return {
		theme,
		toggleTheme,
	}
}
