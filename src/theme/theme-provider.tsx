import { FC, ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme-context'

const currentTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface IThemeProviderProps {
	children: ReactNode
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(currentTheme)

	const themeProviderOptions = useMemo(() => ({ theme, setTheme }), [theme])

	return (
		<ThemeContext.Provider value={themeProviderOptions}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
