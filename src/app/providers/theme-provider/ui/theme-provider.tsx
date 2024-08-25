import { FC, ReactNode, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/theme-context'

const currentTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface IThemeProviderProps {
	children: ReactNode
	initialTheme?: Theme
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children, initialTheme }) => {
	const [theme, setTheme] = useState<Theme>(initialTheme || currentTheme)

	const themeProviderOptions = useMemo(() => ({ theme, setTheme }), [theme])

	return <ThemeContext.Provider value={themeProviderOptions}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
