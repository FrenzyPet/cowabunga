import { createContext } from 'react'

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

export interface IThemeContextProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContextProps>({})
